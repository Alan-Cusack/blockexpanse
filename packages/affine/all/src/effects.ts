import { effects as blocksEffects } from '@blockexpanse/blocks/effects';
import { effects as presetsEffects } from '@blockexpanse/presets/effects';

export function effects() {
  blocksEffects();
  presetsEffects();
}
