export enum GPUState {
  IDLE = "IDLE",
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
}

export default function useGPUState() {
  return GPUState.IDLE;
}
