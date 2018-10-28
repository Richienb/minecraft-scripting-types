declare interface IVanillaServerSystemBase {
    broadcastEvent(eventIdentifier: BroadcastableServerEvent.ExecuteCommand, eventData: string): boolean | null;

    listenForEvent(eventIdentifier: MinecraftServerEvent.EntityCreated, eventData: (eventData: IEntityCreatedEventData) => void): boolean | null

    /**
     * 
     * @param eventIdentifier Allows you to trigger an event with the desired data from script. 
     * Anything that signed up to listen for the event will be notified and the given data delivered to them.
     * @param eventData The data for the event. You can create a new JavaScript Object with the parameters you want to pass in to the listener and the engine will take care of delivering the data to them
     */
    broadcastEvent(eventIdentifier: string, eventData: any): boolean | null;

    /**
     * Allows you to register a JavaScript object that gets called whenever the specified event is broadcast. The event can either be a built-in event or an event specified in script.
     * @param eventIdentifier This is the name of the event to which we want to react. Can be the identifier of a built-in event or a custom one from script
     * @param eventData The name of the JavaScript object that will get called whenever the event is broadcast
     */
    listenForEvent(eventIdentifier: string, eventData: (eventData: any) => void ): boolean | null;
}