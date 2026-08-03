import type { BlockStdScope } from '@blockexpanse/block-std';

import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
  NotificationProvider,
} from '@blockexpanse/affine-shared/services';

import { toast } from '../toast/toast.js';

function notify(std: BlockStdScope, title: string, message: string) {
  const notification = std.getOptional(NotificationProvider);
  const { doc, host } = std;
  const t = std.getOptional(I18nProvider)?.t ?? identityI18nFn;

  if (!notification) {
    toast(host, title);
    return;
  }

  const abortController = new AbortController();
  const clear = () => {
    doc.history.off('stack-item-added', addHandler);
    doc.history.off('stack-item-popped', popHandler);
    disposable.dispose();
  };
  const closeNotify = () => {
    abortController.abort();
    clear();
  };

  // edit or undo or switch doc, close notify toast
  const addHandler = doc.history.on('stack-item-added', closeNotify);
  const popHandler = doc.history.on('stack-item-popped', closeNotify);
  const disposable = host.slots.unmounted.on(closeNotify);

  notification.notify({
    title,
    message,
    accent: 'info',
    duration: 10 * 1000,
    action: {
      label: t(I18nKeys.editor.notification.undo, 'Undo'),
      onClick: () => {
        doc.undo();
        clear();
      },
    },
    abort: abortController.signal,
    onClose: clear,
  });
}

export function notifyLinkedDocSwitchedToCard(std: BlockStdScope) {
  const t = std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  notify(
    std,
    t(I18nKeys.editor.notification.viewUpdatedTitle, 'View Updated'),
    t(
      I18nKeys.editor.notification.viewUpdatedMessage,
      'The alias modification has disabled sync. The embed has been updated to a card view.'
    )
  );
}

export function notifyLinkedDocSwitchedToEmbed(std: BlockStdScope) {
  const t = std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  notify(
    std,
    t(I18nKeys.editor.notification.embedRestoredTitle, 'Embed View Restored'),
    t(
      I18nKeys.editor.notification.embedRestoredMessage,
      'Custom alias removed. The linked doc now displays the original title and description.'
    )
  );
}

export function notifyLinkedDocClearedAliases(std: BlockStdScope) {
  const t = std.getOptional(I18nProvider)?.t ?? identityI18nFn;
  notify(
    std,
    t(I18nKeys.editor.notification.resetSuccessTitle, 'Reset successful'),
    t(
      I18nKeys.editor.notification.resetSuccessMessage,
      `Card view has been restored to original doc title and description. All custom aliases have been removed.`
    )
  );
}
