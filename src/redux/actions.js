import { authSlicer } from "./authReducer";
import { eventSlicer } from "./eventsReducer";
import { modalSlicer } from "./modalReducer";

export const eventAction = eventSlicer.actions;
export const modalAction = modalSlicer.actions;
export const authAction = authSlicer.actions;