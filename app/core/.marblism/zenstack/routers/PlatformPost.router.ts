/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PlatformPostInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platformPost.createMany(input as any))),

        create: procedure.input($Schema.PlatformPostInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platformPost.create(input as any))),

        deleteMany: procedure.input($Schema.PlatformPostInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platformPost.deleteMany(input as any))),

        delete: procedure.input($Schema.PlatformPostInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platformPost.delete(input as any))),

        findFirst: procedure.input($Schema.PlatformPostInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).platformPost.findFirst(input as any))),

        findMany: procedure.input($Schema.PlatformPostInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).platformPost.findMany(input as any))),

        findUnique: procedure.input($Schema.PlatformPostInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).platformPost.findUnique(input as any))),

        updateMany: procedure.input($Schema.PlatformPostInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platformPost.updateMany(input as any))),

        update: procedure.input($Schema.PlatformPostInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platformPost.update(input as any))),

        count: procedure.input($Schema.PlatformPostInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).platformPost.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PlatformPostCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformPostCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformPostCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformPostCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PlatformPostCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformPostCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlatformPostGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlatformPostGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformPostCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformPostCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlatformPostGetPayload<T>, Context>) => Promise<Prisma.PlatformPostGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PlatformPostDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformPostDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformPostDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformPostDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PlatformPostDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformPostDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlatformPostGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlatformPostGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformPostDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformPostDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlatformPostGetPayload<T>, Context>) => Promise<Prisma.PlatformPostGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PlatformPostFindFirstArgs, TData = Prisma.PlatformPostGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PlatformPostFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlatformPostGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlatformPostFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PlatformPostFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlatformPostGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlatformPostGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PlatformPostFindManyArgs, TData = Array<Prisma.PlatformPostGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PlatformPostFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PlatformPostGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlatformPostFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PlatformPostFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PlatformPostGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PlatformPostGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PlatformPostFindUniqueArgs, TData = Prisma.PlatformPostGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PlatformPostFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlatformPostGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlatformPostFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PlatformPostFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlatformPostGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlatformPostGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PlatformPostUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformPostUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformPostUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformPostUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PlatformPostUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformPostUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlatformPostGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlatformPostGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformPostUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformPostUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlatformPostGetPayload<T>, Context>) => Promise<Prisma.PlatformPostGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PlatformPostCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PlatformPostCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PlatformPostCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PlatformPostCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PlatformPostCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PlatformPostCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PlatformPostCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PlatformPostCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
