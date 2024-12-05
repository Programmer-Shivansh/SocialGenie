/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createSocialAccountRouter from "./SocialAccount.router";
import createPostDataRouter from "./PostData.router";
import createPlatformPostRouter from "./PlatformPost.router";
import createContentPreferenceRouter from "./ContentPreference.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SocialAccountClientType } from "./SocialAccount.router";
import { ClientType as PostDataClientType } from "./PostData.router";
import { ClientType as PlatformPostClientType } from "./PlatformPost.router";
import { ClientType as ContentPreferenceClientType } from "./ContentPreference.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        socialAccount: createSocialAccountRouter(router, procedure),
        postData: createPostDataRouter(router, procedure),
        platformPost: createPlatformPostRouter(router, procedure),
        contentPreference: createContentPreferenceRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    socialAccount: SocialAccountClientType<AppRouter>;
    postData: PostDataClientType<AppRouter>;
    platformPost: PlatformPostClientType<AppRouter>;
    contentPreference: ContentPreferenceClientType<AppRouter>;
}
