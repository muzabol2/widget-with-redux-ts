enum AllowedActions {
   CHANGE_BATTERY_LEVEL = "CHANGE_BATTERY_LEVEL",
   CHANGE_LIGHT_TYPE = "CHANGE_LIGHT_TYPE"
}

export type BatteryAction = {
   type: AllowedActions.CHANGE_BATTERY_LEVEL,
   payload: number
};

export type LightAction = {
   type: AllowedActions.CHANGE_LIGHT_TYPE,
   payload: string
};

export type Action = BatteryAction | LightAction;

export const changeBatteryLevel = (batteryLevel: number): BatteryAction => ({
   type: AllowedActions.CHANGE_BATTERY_LEVEL,
   payload: batteryLevel
})

export const changeLightType = (light: string): LightAction => ({
   type: AllowedActions.CHANGE_LIGHT_TYPE,
   payload: light
})

