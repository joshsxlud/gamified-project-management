import type { UserSetting } from "../types/setting";
import { SettingsDisplay } from "../common/settingsDisplay/SettingsDisplay";

export default function Settings(
  {
    settings,
    updateSettings
  }:{
    settings: UserSetting[],
    updateSettings: React.Dispatch<React.SetStateAction<UserSetting[]>>
  }
) {

  return(
    <>
    <header>
      <h1>Settings</h1>
    </header>
    <main>
      <SettingsDisplay settings={settings} updateSettings={updateSettings}/>
    </main>
    </>
  )
}