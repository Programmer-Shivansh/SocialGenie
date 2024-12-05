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

        createMany: procedure.input($Schema.SocialAccountInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialAccount.createMany(input as any))),

        create: procedure.input($Schema.SocialAccountInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialAccount.create(input as any))),

        deleteMany: procedure.input($Schema.SocialAccountInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialAccount.deleteMany(input as any))),

        delete: procedure.input($Schema.SocialAccountInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialAccount.delete(input as any))),

        findFirst: procedure.input($Schema.SocialAccountInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).socialAccount.findFirst(input as any))),

        findMany: procedure.input($Schema.SocialAccountInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).socialAccount.findMany(input as any))),

        findUnique: procedure.input($Schema.SocialAccountInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).socialAccount.findUnique(input as any))),

        updateMany: procedure.input($Schema.SocialAccountInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialAccount.updateMany(input as any))),

        update: procedure.input($Schema.SocialAccountInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialAccount.update(input as any))),

        count: procedure.input($Schema.SocialAccountInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).socialAccount.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SocialAccountCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialAccountCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialAccountCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialAccountCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SocialAccountCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialAccountCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SocialAccountGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SocialAccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialAccountCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialAccountCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SocialAccountGetPayload<T>, Context>) => Promise<Prisma.SocialAccountGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SocialAccountDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialAccountDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialAccountDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialAccountDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SocialAccountDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialAccountDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SocialAccountGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SocialAccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialAccountDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialAccountDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SocialAccountGetPayload<T>, Context>) => Promise<Prisma.SocialAccountGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SocialAccountFindFirstArgs, TData = Prisma.SocialAccountGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.SocialAccountFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SocialAccountGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SocialAccountFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SocialAccountFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SocialAccountGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SocialAccountGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SocialAccountFindManyArgs, TData = Array<Prisma.SocialAccountGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.SocialAccountFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SocialAccountGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SocialAccountFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SocialAccountFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SocialAccountGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SocialAccountGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SocialAccountFindUniqueArgs, TData = Prisma.SocialAccountGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SocialAccountFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SocialAccountGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SocialAccountFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SocialAccountFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SocialAccountGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SocialAccountGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SocialAccountUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialAccountUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialAccountUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialAccountUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SocialAccountUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialAccountUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SocialAccountGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SocialAccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialAccountUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialAccountUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SocialAccountGetPayload<T>, Context>) => Promise<Prisma.SocialAccountGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.SocialAccountCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SocialAccountCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.SocialAccountCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SocialAccountCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.SocialAccountCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.SocialAccountCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SocialAccountCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SocialAccountCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
