/**
 * An interface that stores a setting's changed value.
 */
export type UserSetting = {
  /* Name of the setting */
  name: string,
  
  /* Details about the setting */
  description: string

  /* The setting's set value */
  value: boolean;
}