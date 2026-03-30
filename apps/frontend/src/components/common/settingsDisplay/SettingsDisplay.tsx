import type { JSX } from "react";
import { useState } from "react";
import type { UserSetting } from "../../types/setting";
import { SettingCard } from "../settingCard/SettingCard";

export function SettingsDisplay({
  settings,
  updateSettings
}:{
  settings: UserSetting[],
  updateSettings: React.Dispatch<React.SetStateAction<UserSetting[]>>
}) {
  const [expandedTerm, setExpandedTerm] = useState<string|null>(null);
  
  /* 
    Will have to tie this to the Settings.tsx file in the pages folder
    once we get Tailwind going. These settings rely on changing 
    stylings, and if I do CSS right now I can't be bothered to 
    translate all of it to Tailwind.
  */ 

  const handleSettingsClick = (settingClicked: UserSetting): void => {
    updateSettings(prevState => {
      return prevState.map(s => {
        // Change value boolean of setting
        if(s.name === settingClicked.name) {
          let newValue = !s.value;
          return {...s, value: newValue};
        } else {
          return s;
        }
      })
    });
  }

  const listSettings: JSX.Element[] = settings.map((setting) => {
    return (
      <SettingCard 
        setting = {setting}
        isExpanded = {setting.name === expandedTerm}

        onTitleClick={() => {
            setting.name !== expandedTerm ?
            setExpandedTerm(setting.name) :
            setExpandedTerm(null);
        }}

        onSaveClick = {() => {
          handleSettingsClick(setting);
        }}

        key={setting.name} 
      />
    )
  });

  return(
    <div>
      {listSettings}
    </div>
  )
}
