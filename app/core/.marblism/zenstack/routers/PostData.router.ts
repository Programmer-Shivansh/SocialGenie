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

        createMany: procedure.input($Schema.PostDataInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postData.createMany(input as any))),

        create: procedure.input($Schema.PostDataInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postData.create(input as any))),

        deleteMany: procedure.input($Schema.PostDataInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postData.deleteMany(input as any))),

        delete: procedure.input($Schema.PostDataInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postData.delete(input as any))),

        findFirst: procedure.input($Schema.PostDataInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).postData.findFirst(input as any))),

        findMany: procedure.input($Schema.PostDataInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).postData.findMany(input as any))),

        findUnique: procedure.input($Schema.PostDataInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).postData.findUnique(input as any))),

        updateMany: procedure.input($Schema.PostDataInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postData.updateMany(input as any))),

        update: procedure.input($Schema.PostDataInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postData.update(input as any))),

        count: procedure.input($Schema.PostDataInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).postData.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PostDataCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostDataCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostDataCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostDataCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PostDataCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostDataCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PostDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PostDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostDataCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostDataCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PostDataGetPayload<T>, Context>) => Promise<Prisma.PostDataGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PostDataDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostDataDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostDataDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostDataDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PostDataDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostDataDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PostDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PostDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostDataDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostDataDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PostDataGetPayload<T>, Context>) => Promise<Prisma.PostDataGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PostDataFindFirstArgs, TData = Prisma.PostDataGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PostDataFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PostDataGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PostDataFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PostDataFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PostDataGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PostDataGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PostDataFindManyArgs, TData = Array<Prisma.PostDataGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PostDataFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PostDataGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PostDataFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PostDataFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PostDataGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PostDataGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PostDataFindUniqueArgs, TData = Prisma.PostDataGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PostDataFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PostDataGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PostDataFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PostDataFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PostDataGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PostDataGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PostDataUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostDataUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostDataUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostDataUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PostDataUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostDataUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PostDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PostDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostDataUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostDataUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PostDataGetPayload<T>, Context>) => Promise<Prisma.PostDataGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PostDataCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PostDataCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PostDataCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PostDataCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PostDataCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PostDataCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PostDataCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PostDataCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
