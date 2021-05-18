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
    Primary?: string;
    Secondary?: string;
    Default?: string;
}
/**
 * Default Assets
 */
export interface DefaultAssets {
    FullSizeLogo?: string;
    SmallSizeLogo?: string;
    Background?: string;
    ColorSet?: ColorSet;
}
/**
 * Interface setting forRoot Konverso
 */
export interface KonversoInterface {
    endpoint: string;
    token?: string;
    auth?: boolean;
    lang?: string;
    CustomWelcome?: boolean;
    defaultAssets?: DefaultAssets;
    BotInitMessage?: BotInitMessage;
    AssistantMode?: boolean;
    InputPlaceHolder: WildCardObjectArray;
}
/**
 *  Inteface setting for authentication
 *  @userId: string;  // unique user ID (any type of format accepted)
 *  @lang: string; // 2 digits language used (like "fr", "en", etc.)
 *  @location?: string; // simple address string
 *  @firstVisit?:boolean; // enable first visite message if is set to true
 *  @[index: string]: string; // All other stuff put here for bot knowledge;
 */
export interface KonversoUser {
    userId: string;
    lang: string;
    location?: string;
    firstVisit?: any;
    [index: string]: any;
}
/**
 *  Inteface Query Konverso
 */
export interface KonversoQuery {
    userId: string;
    lang: string;
    query: string;
    isSending: true;
    [index: string]: any;
}
/**
 *  OpenChatBot Answer Interfaces
 *  This following interface is based on https://openchatbot.io/swagger/swagger.html#/default/ask_chatbot
 */
interface OpenChatBotChannelPayload {
    type: ('html' | 'plainText');
    payload: string;
}
interface OpenChatBotChannel {
    markup: OpenChatBotChannelPayload;
    messaging: OpenChatBotChannelPayload;
    sms: OpenChatBotChannelPayload;
    tts: OpenChatBotChannelPayload;
}
interface OpenChatBotAction {
    type: string;
    label?: string;
    payload?: string;
    value?: {
        onClick?: string;
        title?: string;
        displayedMessage: string;
    };
}
interface OpenChatBotMedia {
    shortDesc: string;
    longDesc: string;
    title: string;
    mimeType: string;
    src: string;
    required_actions: OpenChatBotAction[];
    suggested_actions: OpenChatBotAction[];
    default_actions: OpenChatBotAction;
    buttons: OpenChatBotAction[];
}
interface WildCardObject {
    [index: string]: string;
}
export interface OpenChatBotResponse {
    query?: string;
    userId?: string;
    timestamp?: number;
    text?: string;
    infoURL?: string;
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
}
interface OpenChatBotMeta {
    version: number;
    botIcon: string;
    botName: string;
    copyright: string;
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
    message: string;
    date: string;
    error?: boolean;
}
export {};
