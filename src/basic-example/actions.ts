interface TurnOnAction {
  type: 'TURN_ON';
}

interface TurnOffAction {
  type: 'TURN_OFF';
}

export type Action = TurnOnAction | TurnOffAction;