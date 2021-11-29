/***********************************************************
 **  @project ngx-konverso                              **
 **  @file KonversoInterface                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 30/03/2021                                         **
 ***********************************************************/
interface WildCardObjectArray {
    [index: string]: any[];
}
/**
 *  Bot Init message
 *  @FirstUsage { en : [
 *          'Hello im Botman i can help you',
 *          'You can ask me anything',
 *          'For example : I have a problem with my plants'
 *         ],
 *    fr : [
 *        'Bonjour je suis botman',
 *        'Tu peux me demander ce que tu veux',
 *        'Par exemple : mes plantes ont un problème'
 *        ]
 *  }; First message (type stepper)
 *
 *  @Welcome  {
 *      en : 'Hi Jean, im glad to see you, what can i do for you ?',
 *      fr : 'Bonjour, ravis de te revoir, que puis-je faire pour toi'
 *    } Welcome message simple string
 */
export interface BotInitMessage {
    FirstUsage?: WildCardObjectArray;
    Welcome?: WildCardObject;
}
export interface ColorSet {
    Primary?: string | null | undefined;
    Secondary?: string | null | undefined;
    Default?: string | null | undefined;
}
/**
 * Default Assets
 */
export interface DefaultAssets {
    FullSizeLogo?: string | null | undefined;
    SmallSizeLogo?: string | null | undefined;
    Background?: string | null | undefined;
    ColorSet?: ColorSet;
}
/**
 * Interface setting forRoot Konverso
 */
export interface KonversoInterface {
    endpoint: string | null | undefined;
    token?: string | null | undefined;
    auth?: boolean;
    lang?: string | null | undefined;
    CustomWelcome?: boolean;
    defaultAssets?: DefaultAssets;
    BotInitMessage?: BotInitMessage;
    AssistantMode?: boolean;
    InputPlaceHolder: WildCardObjectArray;
}
/**
 *  Inteface setting for authentication
 *  @userId: string | null  | undefined;  // unique user ID (any type of format accepted)
 *  @lang: string | null  | undefined; // 2 digits language used (like "fr", "en", etc.)
 *  @location?: string | null  | undefined; // simple address string
 *  @firstVisit?:boolean; // enable first visite message if is set to true
 *  @[index: string]: string | null  | undefined; // All other stuff put here for bot knowledge;
 */
export interface KonversoUser {
    userId: string | null | undefined;
    lang: string | null | undefined;
    location?: string | null | undefined;
    firstVisit?: any;
    [index: string]: any;
}
/**
 *  Inteface Query Konverso
 */
export interface KonversoQuery {
    userId: string | null | undefined;
    lang: string | null | undefined;
    query: string | null | undefined;
    isSending: true;
    [index: string]: any;
}
/**
 *  OpenChatBot Answer Interfaces
 *  This following interface is based on https://openchatbot.io/swagger/swagger.html#/default/ask_chatbot
 */
interface OpenChatBotChannelPayload {
    type: ('html' | 'plainText');
    payload: string | null | undefined;
}
interface OpenChatBotChannel {
    markup: OpenChatBotChannelPayload;
    messaging: OpenChatBotChannelPayload;
    sms: OpenChatBotChannelPayload;
    tts: OpenChatBotChannelPayload;
}
interface OpenChatBotAction {
    type: string | null | undefined;
    label?: string | null | undefined;
    payload?: string | null | undefined;
    value?: {
        onClick?: string | null | undefined;
        title?: string | null | undefined;
        displayedMessage: string | null | undefined;
    };
}
interface OpenChatBotMedia {
    shortDesc: string | null | undefined;
    longDesc: string | null | undefined;
    title: string | null | undefined;
    mimeType: string | null | undefined;
    src: string | null | undefined;
    required_actions: OpenChatBotAction[];
    suggested_actions: OpenChatBotAction[];
    default_actions: OpenChatBotAction;
    buttons: OpenChatBotAction[];
}
interface WildCardObject {
    [index: string]: string | null | undefined;
}
export interface OpenChatBotResponse {
    query?: string | null | undefined;
    userId?: string | null | undefined;
    timestamp?: number;
    text?: string | null | undefined;
    infoURL?: string | null | undefined;
    echo?: {
        session: string;
    };
    score?: {
        value: number;
    };
    channel?: OpenChatBotChannel;
    medias?: [OpenChatBotMedia];
    context?: WildCardObject[];
    suggestions?: OpenChatBotAction[];
    endOfTopic?: boolean;
}
interface OpenChatBotMeta {
    version: number;
    botIcon: string | null | undefined;
    botName: string | null | undefined;
    copyright: string | null | undefined;
    authors: string[];
}
interface OpenChatBotStatus {
    code: (200 | 400);
    errorType: ('success' | 'Bad request');
}
export interface KonversoAnswer {
    response?: OpenChatBotResponse;
    meta: OpenChatBotMeta;
    status: OpenChatBotStatus;
}
export interface UserInput {
    message: string | null | undefined;
    date: string | null | undefined;
    error?: boolean | null;
}
export {};
