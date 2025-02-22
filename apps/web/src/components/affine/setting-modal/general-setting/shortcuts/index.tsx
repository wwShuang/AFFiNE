import { useAFFiNEI18N } from '@affine/i18n/hooks';

import {
  useEdgelessShortcuts,
  useGeneralShortcuts,
  useMarkdownShortcuts,
  usePageShortcuts,
} from '../../../../../hooks/affine/use-shortcuts';
import { SettingHeader } from '../../common/setting-header';
import { Wrapper } from '../../common/wrapper';
import { shortcutRow } from './style.css';

export const Shortcuts = () => {
  const t = useAFFiNEI18N();

  const markdownShortcuts = useMarkdownShortcuts();
  const pageShortcuts = usePageShortcuts();
  const edgelessShortcuts = useEdgelessShortcuts();
  const generalShortcuts = useGeneralShortcuts();

  return (
    <>
      <SettingHeader
        title={t['Keyboard Shortcuts']()}
        subtitle={t['Check Keyboard Shortcuts quickly']()}
      />
      <Wrapper title={t['General']()}>
        {Object.entries(generalShortcuts).map(([title, shortcuts]) => {
          return (
            <div key={title} className={shortcutRow}>
              <span>{title}</span>
              <span className="shortcut">{shortcuts}</span>
            </div>
          );
        })}
      </Wrapper>
      <Wrapper title={t['Page']()}>
        {Object.entries(pageShortcuts).map(([title, shortcuts]) => {
          return (
            <div key={title} className={shortcutRow}>
              <span>{title}</span>
              <span className="shortcut">{shortcuts}</span>
            </div>
          );
        })}
      </Wrapper>
      <Wrapper title={t['Edgeless']()}>
        {Object.entries(edgelessShortcuts).map(([title, shortcuts]) => {
          return (
            <div key={title} className={shortcutRow}>
              <span>{title}</span>
              <span className="shortcut">{shortcuts}</span>
            </div>
          );
        })}
      </Wrapper>
      <Wrapper title={t['Markdown Syntax']()}>
        {Object.entries(markdownShortcuts).map(([title, shortcuts]) => {
          return (
            <div key={title} className={shortcutRow}>
              <span>{title}</span>
              <span className="shortcut">{shortcuts}</span>
            </div>
          );
        })}
      </Wrapper>
    </>
  );
};
