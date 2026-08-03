import type { EditorHost } from '@blockexpanse/block-std';
import type { TemplateResult } from 'lit';

import { toastI18n } from '@blockexpanse/affine-components/toast';
import {
  type I18nFn,
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import {
  type AffineAIPanelWidget,
  type AffineAIPanelWidgetConfig,
  type AIItemGroupConfig,
  AIStarIconWithAnimation,
  DeleteIcon,
  getAIPanelWidget,
  getSelectedText,
  InsertBelowIcon,
  ReplaceIcon,
  ResetIcon,
} from '@blockexpanse/blocks';
import {
  ChatWithAiIcon,
  CheckBoxCheckLinearIcon,
  EditIcon,
  ExplainIcon,
  ImproveWritingIcon,
  LanguageIcon,
  LongerIcon,
  PenIcon,
  ShorterIcon,
  SummarizeIcon,
  ToneIcon,
} from '@blockexpanse/icons/lit';
import { Text } from '@blockexpanse/store';
import { html } from 'lit';

const icon = (
  factory: (opts?: { width?: string; height?: string }) => TemplateResult
) => factory({ width: '20px', height: '20px' });

function runAction(host: EditorHost, actionLabel: string) {
  const panel = getAIPanelWidget(host);
  if (!panel) return;
  const selected = getSelectedText(host);
  const prompt = selected ? `${actionLabel}:\n${selected}` : actionLabel;
  const textSel = host.selection.find('text');
  const block = (textSel && host.view.getBlock(textSel.from.blockId)) || host;
  panel.toggle(block, prompt);
}

function insertAnswerBelow(host: EditorHost) {
  const panel = getAIPanelWidget(host);
  const answer = panel?.answer?.trim();
  if (!panel || !answer) return;

  const textSel = host.selection.find('text');
  const blockId = textSel?.from.blockId;
  const model = blockId ? host.doc.getBlock(blockId)?.model : null;
  if (!model) return;

  host.doc.addSiblingBlocks(model, [
    {
      flavour: 'affine:paragraph',
      text: new Text(answer),
    },
  ]);
  panel.hide();
}

function replaceSelectionWithAnswer(host: EditorHost) {
  const panel = getAIPanelWidget(host);
  const answer = panel?.answer;
  if (!panel || answer == null) return;

  const [ok] = host.std.command.chain().getTextSelection().deleteText().run();
  if (!ok) {
    panel.hide();
    return;
  }

  const textSel = host.selection.find('text');
  if (!textSel) {
    panel.hide();
    return;
  }
  const model = host.doc.getBlock(textSel.from.blockId)?.model;
  if (!model?.text) {
    panel.hide();
    return;
  }
  model.text.insert(answer, textSel.from.index);
  host.selection.setGroup('note', [
    host.selection.create('text', {
      from: {
        blockId: textSel.from.blockId,
        index: textSel.from.index + answer.length,
        length: 0,
      },
      to: null,
    }),
  ]);
  panel.hide();
}

/** Playground demo action groups (Review / Edit / Generate). */
export function buildPageAIActionGroups(
  t: I18nFn = identityI18nFn
): AIItemGroupConfig[] {
  return [
    {
      name: t(I18nKeys.editor.ai.reviewText, 'Review text'),
      items: [
        {
          name: t(I18nKeys.editor.ai.fixSpelling, 'Fix spelling'),
          icon: icon(CheckBoxCheckLinearIcon),
          handler: host =>
            runAction(host, t(I18nKeys.editor.ai.fixSpelling, 'Fix spelling')),
        },
        {
          name: t(I18nKeys.editor.ai.fixGrammar, 'Fix grammar'),
          icon: icon(CheckBoxCheckLinearIcon),
          handler: host =>
            runAction(host, t(I18nKeys.editor.ai.fixGrammar, 'Fix grammar')),
        },
        {
          name: t(I18nKeys.editor.ai.explainSelection, 'Explain selection'),
          icon: icon(ExplainIcon),
          handler: host =>
            runAction(
              host,
              t(I18nKeys.editor.ai.explainSelection, 'Explain selection')
            ),
        },
      ],
    },
    {
      name: t(I18nKeys.editor.ai.editText, 'Edit text'),
      items: [
        {
          name: t(I18nKeys.editor.ai.translateTo, 'Translate to'),
          icon: icon(LanguageIcon),
          subItem: [
            {
              type: t(I18nKeys.editor.ai.translateToEnglish, 'English'),
              handler: host =>
                runAction(
                  host,
                  `${t(I18nKeys.editor.ai.translateTo, 'Translate to')} ${t(I18nKeys.editor.ai.translateToEnglish, 'English')}`
                ),
            },
            {
              type: t(
                I18nKeys.editor.ai.translateToChinese,
                'Simplified Chinese'
              ),
              handler: host =>
                runAction(
                  host,
                  `${t(I18nKeys.editor.ai.translateTo, 'Translate to')} ${t(I18nKeys.editor.ai.translateToChinese, 'Simplified Chinese')}`
                ),
            },
            {
              type: t(I18nKeys.editor.ai.translateToJapanese, 'Japanese'),
              handler: host =>
                runAction(
                  host,
                  `${t(I18nKeys.editor.ai.translateTo, 'Translate to')} ${t(I18nKeys.editor.ai.translateToJapanese, 'Japanese')}`
                ),
            },
          ],
        },
        {
          name: t(I18nKeys.editor.ai.changeToneTo, 'Change tone to'),
          icon: icon(ToneIcon),
          subItem: [
            {
              type: t(I18nKeys.editor.ai.toneProfessional, 'Professional'),
              handler: host =>
                runAction(
                  host,
                  `${t(I18nKeys.editor.ai.changeToneTo, 'Change tone to')} ${t(I18nKeys.editor.ai.toneProfessional, 'Professional')}`
                ),
            },
            {
              type: t(I18nKeys.editor.ai.toneCasual, 'Casual'),
              handler: host =>
                runAction(
                  host,
                  `${t(I18nKeys.editor.ai.changeToneTo, 'Change tone to')} ${t(I18nKeys.editor.ai.toneCasual, 'Casual')}`
                ),
            },
            {
              type: t(I18nKeys.editor.ai.toneFriendly, 'Friendly'),
              handler: host =>
                runAction(
                  host,
                  `${t(I18nKeys.editor.ai.changeToneTo, 'Change tone to')} ${t(I18nKeys.editor.ai.toneFriendly, 'Friendly')}`
                ),
            },
          ],
        },
        {
          name: t(I18nKeys.editor.ai.improveWriting, 'Improve writing'),
          icon: icon(ImproveWritingIcon),
          handler: host =>
            runAction(
              host,
              t(I18nKeys.editor.ai.improveWriting, 'Improve writing')
            ),
        },
        {
          name: t(I18nKeys.editor.ai.makeLonger, 'Make it longer'),
          icon: icon(LongerIcon),
          handler: host =>
            runAction(host, t(I18nKeys.editor.ai.makeLonger, 'Make it longer')),
        },
        {
          name: t(I18nKeys.editor.ai.makeShorter, 'Make it shorter'),
          icon: icon(ShorterIcon),
          handler: host =>
            runAction(
              host,
              t(I18nKeys.editor.ai.makeShorter, 'Make it shorter')
            ),
        },
        {
          name: t(I18nKeys.editor.ai.continueWriting, 'Continue writing'),
          icon: icon(PenIcon),
          handler: host =>
            runAction(
              host,
              t(I18nKeys.editor.ai.continueWriting, 'Continue writing')
            ),
        },
      ],
    },
    {
      name: t(I18nKeys.editor.ai.generateFromText, 'Generate from text'),
      items: [
        {
          name: t(I18nKeys.editor.ai.summarize, 'Summarize'),
          icon: icon(SummarizeIcon),
          handler: host =>
            runAction(host, t(I18nKeys.editor.ai.summarize, 'Summarize')),
        },
        {
          name: t(I18nKeys.editor.ai.generateOutline, 'Generate outline'),
          icon: icon(EditIcon),
          handler: host =>
            runAction(
              host,
              t(I18nKeys.editor.ai.generateOutline, 'Generate outline')
            ),
        },
      ],
    },
  ];
}

/** Playground-only mock AI panel config. Replace in real apps. */
export function buildDemoAIPanelConfig(
  panel: AffineAIPanelWidget,
  options?: {
    t?: I18nFn;
    actionGroups?: AIItemGroupConfig[];
  }
): AffineAIPanelWidgetConfig {
  const t =
    options?.t ?? panel.host.std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  const actionGroups = options?.actionGroups ?? buildPageAIActionGroups(t);

  return {
    answerRenderer: answer =>
      html`<div style="white-space: pre-wrap">${answer}</div>`,
    generateAnswer: ({ input, update, finish, signal }) => {
      const selected = getSelectedText(panel.host).trim();
      const answer =
        (selected && input.includes(selected)
          ? selected
          : input.trim() || selected
        ).trim() ||
        t(I18nKeys.editor.ai.thoughtsPlaceholder, 'What are your thoughts?');

      let i = 0;
      const step = Math.max(1, Math.ceil(answer.length / 24));
      const timer = window.setInterval(() => {
        if (signal.aborted) {
          window.clearInterval(timer);
          finish('aborted');
          return;
        }
        i = Math.min(answer.length, i + step);
        update(answer.slice(0, i));
        if (i >= answer.length) {
          window.clearInterval(timer);
          finish('success');
        }
      }, 40);
    },
    inputStateConfig: {
      groups: actionGroups,
    },
    generatingStateConfig: {
      generatingIcon: AIStarIconWithAnimation,
    },
    finishStateConfig: {
      responses: [
        {
          name: t(I18nKeys.editor.ai.response, 'Response'),
          items: [
            {
              name: t(I18nKeys.editor.ai.insertBelow, 'Insert below'),
              icon: InsertBelowIcon,
              handler: insertAnswerBelow,
            },
            {
              name: t(I18nKeys.editor.ai.replaceSelection, 'Replace selection'),
              icon: ReplaceIcon,
              handler: replaceSelectionWithAnswer,
            },
          ],
        },
      ],
      actions: [
        {
          items: [
            {
              name: t(I18nKeys.editor.ai.continueInChat, 'Continue in chat'),
              icon: icon(ChatWithAiIcon),
              handler: host => {
                toastI18n(
                  host,
                  I18nKeys.editor.ai.continueInChat,
                  'Continue in chat'
                );
              },
            },
            {
              name: t(I18nKeys.editor.ai.regenerate, 'Regenerate'),
              icon: ResetIcon,
              handler: () => {
                panel.generate();
              },
            },
            {
              name: 'Discard',
              icon: DeleteIcon,
              handler: () => {
                panel.discard();
              },
            },
          ],
        },
      ],
    },
    errorStateConfig: {
      login: () => {},
      upgrade: () => {},
      cancel: () => {
        panel.hide();
      },
      responses: [],
    },
    copy: {
      allowed: true,
      onCopy: async () => {
        const answer = panel.answer;
        if (!answer) return false;
        await navigator.clipboard.writeText(answer);
        return true;
      },
    },
  };
}
