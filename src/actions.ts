enum AllowedActions {
   CHANGE_BATTERY_LEVEL = "CHANGE_BATTERY_LEVEL",
   CHANGE_LIGHT_TYPE = "CHANGE_LIGHT_TYPE",
   CONNECT_WITH_BACKEND = "CONNECT_WITH_BACKEND"
};

export type BatteryAction = {
   type: AllowedActions.CHANGE_BATTERY_LEVEL,
   payload: number
};

export type LightAction = {
   type: AllowedActions.CHANGE_LIGHT_TYPE,
   payload: string
};

export type ConnectAction = {
   type: AllowedActions.CONNECT_WITH_BACKEND,
   payload: boolean
}

export type Action = BatteryAction | LightAction | ConnectAction;

export const changeBatteryLevel = (batteryLevel: number): BatteryAction => ({
   type: AllowedActions.CHANGE_BATTERY_LEVEL,
   payload: batteryLevel
});

export const changeLightType = (light: string): LightAction => ({
   type: AllowedActions.CHANGE_LIGHT_TYPE,
   payload: light
});

export const connectWithBackend = (connect: boolean): ConnectAction => ({
   type: AllowedActions.CONNECT_WITH_BACKEND,
   payload: connect
});
