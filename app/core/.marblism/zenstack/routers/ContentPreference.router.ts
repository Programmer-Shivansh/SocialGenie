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

        createMany: procedure.input($Schema.ContentPreferenceInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentPreference.createMany(input as any))),

        create: procedure.input($Schema.ContentPreferenceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentPreference.create(input as any))),

        deleteMany: procedure.input($Schema.ContentPreferenceInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentPreference.deleteMany(input as any))),

        delete: procedure.input($Schema.ContentPreferenceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentPreference.delete(input as any))),

        findFirst: procedure.input($Schema.ContentPreferenceInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).contentPreference.findFirst(input as any))),

        findMany: procedure.input($Schema.ContentPreferenceInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).contentPreference.findMany(input as any))),

        findUnique: procedure.input($Schema.ContentPreferenceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).contentPreference.findUnique(input as any))),

        updateMany: procedure.input($Schema.ContentPreferenceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentPreference.updateMany(input as any))),

        update: procedure.input($Schema.ContentPreferenceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentPreference.update(input as any))),

        count: procedure.input($Schema.ContentPreferenceInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).contentPreference.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ContentPreferenceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentPreferenceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentPreferenceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentPreferenceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ContentPreferenceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentPreferenceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContentPreferenceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContentPreferenceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentPreferenceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentPreferenceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContentPreferenceGetPayload<T>, Context>) => Promise<Prisma.ContentPreferenceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ContentPreferenceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentPreferenceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentPreferenceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentPreferenceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ContentPreferenceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentPreferenceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContentPreferenceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContentPreferenceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentPreferenceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentPreferenceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContentPreferenceGetPayload<T>, Context>) => Promise<Prisma.ContentPreferenceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ContentPreferenceFindFirstArgs, TData = Prisma.ContentPreferenceGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ContentPreferenceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContentPreferenceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentPreferenceFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ContentPreferenceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContentPreferenceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContentPreferenceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ContentPreferenceFindManyArgs, TData = Array<Prisma.ContentPreferenceGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ContentPreferenceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ContentPreferenceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentPreferenceFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ContentPreferenceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ContentPreferenceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ContentPreferenceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ContentPreferenceFindUniqueArgs, TData = Prisma.ContentPreferenceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContentPreferenceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContentPreferenceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentPreferenceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContentPreferenceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContentPreferenceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContentPreferenceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ContentPreferenceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentPreferenceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentPreferenceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentPreferenceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ContentPreferenceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentPreferenceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContentPreferenceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContentPreferenceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentPreferenceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentPreferenceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContentPreferenceGetPayload<T>, Context>) => Promise<Prisma.ContentPreferenceGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ContentPreferenceCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ContentPreferenceCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ContentPreferenceCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ContentPreferenceCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ContentPreferenceCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ContentPreferenceCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ContentPreferenceCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ContentPreferenceCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
