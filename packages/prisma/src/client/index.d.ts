
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  username: string
  discriminator: string
  avatar: string | null
  sitePermissions: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  invalid: boolean
  device: string
  accessToken: string
  refreshToken: string
  token: string
  version: string
  createdAt: Date
  expiresAt: Date
  userId: string
}

/**
 * Model Application
 * 
 */
export type Application = {
  id: string
  name: string
  requestCount: number
  requestLimit: number
  requestLimitResetAt: Date
  createdAt: Date
  updatedAt: Date
  ownerId: string
  userId: string
}

/**
 * Model Flag
 * 
 */
export type Flag = {
  id: string
  name: string
  description: string
  color: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Report
 * 
 */
export type Report = {
  id: string
  userId: string
  reporterUserId: string
  flagId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Appeal
 * 
 */
export type Appeal = {
  id: string
  reason: string
  isSuccessful: boolean
  resolvedReason: string | null
  resolvedAt: Date | null
  resolverUserId: string
  reportId: string
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<GlobalReject>;

  /**
   * `prisma.flag`: Exposes CRUD operations for the **Flag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flags
    * const flags = await prisma.flag.findMany()
    * ```
    */
  get flag(): Prisma.FlagDelegate<GlobalReject>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<GlobalReject>;

  /**
   * `prisma.appeal`: Exposes CRUD operations for the **Appeal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appeals
    * const appeals = await prisma.appeal.findMany()
    * ```
    */
  get appeal(): Prisma.AppealDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.8.1
   * Query Engine version: 34df67547cf5598f5a6cd3eb45f14ee70c3fb86f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Application: 'Application',
    Flag: 'Flag',
    Report: 'Report',
    Appeal: 'Appeal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    sessions: number
    applications: number
    reports: number
    reporterReports: number
    resolverAppeals: number
  }

  export type UserCountOutputTypeSelect = {
    sessions?: boolean
    applications?: boolean
    reports?: boolean
    reporterReports?: boolean
    resolverAppeals?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type FlagCountOutputType
   */


  export type FlagCountOutputType = {
    reports: number
  }

  export type FlagCountOutputTypeSelect = {
    reports?: boolean
  }

  export type FlagCountOutputTypeGetPayload<
    S extends boolean | null | undefined | FlagCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? FlagCountOutputType
    : S extends undefined
    ? never
    : S extends FlagCountOutputTypeArgs
    ?'include' extends U
    ? FlagCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof FlagCountOutputType ?FlagCountOutputType [P]
  : 
     never
  } 
    : FlagCountOutputType
  : FlagCountOutputType




  // Custom InputTypes

  /**
   * FlagCountOutputType without action
   */
  export type FlagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FlagCountOutputType
     * 
    **/
    select?: FlagCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    sitePermissions: number | null
  }

  export type UserSumAggregateOutputType = {
    sitePermissions: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    discriminator: string | null
    avatar: string | null
    sitePermissions: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    discriminator: string | null
    avatar: string | null
    sitePermissions: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    discriminator: number
    avatar: number
    sitePermissions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    sitePermissions?: true
  }

  export type UserSumAggregateInputType = {
    sitePermissions?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    discriminator?: true
    avatar?: true
    sitePermissions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    discriminator?: true
    avatar?: true
    sitePermissions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    discriminator?: true
    avatar?: true
    sitePermissions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    username: string
    discriminator: string
    avatar: string | null
    sitePermissions: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    username?: boolean
    discriminator?: boolean
    avatar?: boolean
    sitePermissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | SessionFindManyArgs
    applications?: boolean | ApplicationFindManyArgs
    application?: boolean | ApplicationArgs
    reports?: boolean | ReportFindManyArgs
    reporterReports?: boolean | ReportFindManyArgs
    resolverAppeals?: boolean | AppealFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    sessions?: boolean | SessionFindManyArgs
    applications?: boolean | ApplicationFindManyArgs
    application?: boolean | ApplicationArgs
    reports?: boolean | ReportFindManyArgs
    reporterReports?: boolean | ReportFindManyArgs
    resolverAppeals?: boolean | AppealFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'sessions'
        ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends 'applications'
        ? Array < ApplicationGetPayload<S['include'][P]>>  :
        P extends 'application'
        ? ApplicationGetPayload<S['include'][P]> | null :
        P extends 'reports'
        ? Array < ReportGetPayload<S['include'][P]>>  :
        P extends 'reporterReports'
        ? Array < ReportGetPayload<S['include'][P]>>  :
        P extends 'resolverAppeals'
        ? Array < AppealGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'sessions'
        ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends 'applications'
        ? Array < ApplicationGetPayload<S['select'][P]>>  :
        P extends 'application'
        ? ApplicationGetPayload<S['select'][P]> | null :
        P extends 'reports'
        ? Array < ReportGetPayload<S['select'][P]>>  :
        P extends 'reporterReports'
        ? Array < ReportGetPayload<S['select'][P]>>  :
        P extends 'resolverAppeals'
        ? Array < AppealGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    sessions<T extends SessionFindManyArgs = {}>(args?: Subset<T, SessionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>;

    applications<T extends ApplicationFindManyArgs = {}>(args?: Subset<T, ApplicationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Application>>, PrismaPromise<Array<ApplicationGetPayload<T>>>>;

    application<T extends ApplicationArgs = {}>(args?: Subset<T, ApplicationArgs>): CheckSelect<T, Prisma__ApplicationClient<Application | null >, Prisma__ApplicationClient<ApplicationGetPayload<T> | null >>;

    reports<T extends ReportFindManyArgs = {}>(args?: Subset<T, ReportFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Report>>, PrismaPromise<Array<ReportGetPayload<T>>>>;

    reporterReports<T extends ReportFindManyArgs = {}>(args?: Subset<T, ReportFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Report>>, PrismaPromise<Array<ReportGetPayload<T>>>>;

    resolverAppeals<T extends AppealFindManyArgs = {}>(args?: Subset<T, AppealFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Appeal>>, PrismaPromise<Array<AppealGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    invalid: boolean | null
    device: string | null
    accessToken: string | null
    refreshToken: string | null
    token: string | null
    version: string | null
    createdAt: Date | null
    expiresAt: Date | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    invalid: boolean | null
    device: string | null
    accessToken: string | null
    refreshToken: string | null
    token: string | null
    version: string | null
    createdAt: Date | null
    expiresAt: Date | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    invalid: number
    device: number
    accessToken: number
    refreshToken: number
    token: number
    version: number
    createdAt: number
    expiresAt: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    invalid?: true
    device?: true
    accessToken?: true
    refreshToken?: true
    token?: true
    version?: true
    createdAt?: true
    expiresAt?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    invalid?: true
    device?: true
    accessToken?: true
    refreshToken?: true
    token?: true
    version?: true
    createdAt?: true
    expiresAt?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    invalid?: true
    device?: true
    accessToken?: true
    refreshToken?: true
    token?: true
    version?: true
    createdAt?: true
    expiresAt?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    invalid: boolean
    device: string
    accessToken: string
    refreshToken: string
    token: string
    version: string
    createdAt: Date
    expiresAt: Date
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Promise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    invalid?: boolean
    device?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    token?: boolean
    version?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }

  export type SessionInclude = {
    user?: boolean | UserArgs
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Session ?Session [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
  }



  /**
   * Model Application
   */


  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    requestCount: number | null
    requestLimit: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    requestCount: number | null
    requestLimit: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    name: string | null
    requestCount: number | null
    requestLimit: number | null
    requestLimitResetAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
    userId: string | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    requestCount: number | null
    requestLimit: number | null
    requestLimitResetAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
    userId: string | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    name: number
    requestCount: number
    requestLimit: number
    requestLimitResetAt: number
    createdAt: number
    updatedAt: number
    ownerId: number
    userId: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    requestCount?: true
    requestLimit?: true
  }

  export type ApplicationSumAggregateInputType = {
    requestCount?: true
    requestLimit?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    name?: true
    requestCount?: true
    requestLimit?: true
    requestLimitResetAt?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    userId?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    name?: true
    requestCount?: true
    requestLimit?: true
    requestLimitResetAt?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    userId?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    name?: true
    requestCount?: true
    requestLimit?: true
    requestLimitResetAt?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    userId?: true
    _all?: true
  }

  export type ApplicationAggregateArgs = {
    /**
     * Filter which Application to aggregate.
     * 
    **/
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     * 
    **/
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs = {
    where?: ApplicationWhereInput
    orderBy?: Enumerable<ApplicationOrderByWithAggregationInput>
    by: Array<ApplicationScalarFieldEnum>
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }


  export type ApplicationGroupByOutputType = {
    id: string
    name: string
    requestCount: number
    requestLimit: number
    requestLimitResetAt: Date
    createdAt: Date
    updatedAt: Date
    ownerId: string
    userId: string
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Promise<
    Array<
      PickArray<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect = {
    id?: boolean
    name?: boolean
    requestCount?: boolean
    requestLimit?: boolean
    requestLimitResetAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserArgs
    userId?: boolean
    user?: boolean | UserArgs
  }

  export type ApplicationInclude = {
    owner?: boolean | UserArgs
    user?: boolean | UserArgs
  }

  export type ApplicationGetPayload<
    S extends boolean | null | undefined | ApplicationArgs,
    U = keyof S
      > = S extends true
        ? Application
    : S extends undefined
    ? never
    : S extends ApplicationArgs | ApplicationFindManyArgs
    ?'include' extends U
    ? Application  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'owner'
        ? UserGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Application ?Application [P]
  : 
          P extends 'owner'
        ? UserGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Application
  : Application


  type ApplicationCountArgs = Merge<
    Omit<ApplicationFindManyArgs, 'select' | 'include'> & {
      select?: ApplicationCountAggregateInputType | true
    }
  >

  export interface ApplicationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApplicationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ApplicationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Application'> extends True ? CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>> : CheckSelect<T, Prisma__ApplicationClient<Application | null >, Prisma__ApplicationClient<ApplicationGetPayload<T> | null >>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApplicationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ApplicationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Application'> extends True ? CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>> : CheckSelect<T, Prisma__ApplicationClient<Application | null >, Prisma__ApplicationClient<ApplicationGetPayload<T> | null >>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApplicationFindManyArgs>(
      args?: SelectSubset<T, ApplicationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Application>>, PrismaPromise<Array<ApplicationGetPayload<T>>>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
    **/
    create<T extends ApplicationCreateArgs>(
      args: SelectSubset<T, ApplicationCreateArgs>
    ): CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>>

    /**
     * Create many Applications.
     *     @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     *     @example
     *     // Create many Applications
     *     const application = await prisma.application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApplicationCreateManyArgs>(
      args?: SelectSubset<T, ApplicationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
    **/
    delete<T extends ApplicationDeleteArgs>(
      args: SelectSubset<T, ApplicationDeleteArgs>
    ): CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApplicationUpdateArgs>(
      args: SelectSubset<T, ApplicationUpdateArgs>
    ): CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApplicationDeleteManyArgs>(
      args?: SelectSubset<T, ApplicationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApplicationUpdateManyArgs>(
      args: SelectSubset<T, ApplicationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
    **/
    upsert<T extends ApplicationUpsertArgs>(
      args: SelectSubset<T, ApplicationUpsertArgs>
    ): CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>>

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ApplicationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    owner<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * Throw an Error if a Application can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Application to fetch.
     * 
    **/
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * Throw an Error if a Application can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Application to fetch.
     * 
    **/
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     * 
    **/
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     * 
    **/
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     * 
    **/
    distinct?: Enumerable<ApplicationScalarFieldEnum>
  }


  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * Filter, which Applications to fetch.
     * 
    **/
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     * 
    **/
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     * 
    **/
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ApplicationScalarFieldEnum>
  }


  /**
   * Application create
   */
  export type ApplicationCreateArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * The data needed to create a Application.
     * 
    **/
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }


  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs = {
    data: Enumerable<ApplicationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Application update
   */
  export type ApplicationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * The data needed to update a Application.
     * 
    **/
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     * 
    **/
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs = {
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    where?: ApplicationWhereInput
  }


  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * The filter to search for the Application to update in case it exists.
     * 
    **/
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     * 
    **/
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }


  /**
   * Application delete
   */
  export type ApplicationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * Filter which Application to delete.
     * 
    **/
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs = {
    where?: ApplicationWhereInput
  }


  /**
   * Application without action
   */
  export type ApplicationArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
  }



  /**
   * Model Flag
   */


  export type AggregateFlag = {
    _count: FlagCountAggregateOutputType | null
    _avg: FlagAvgAggregateOutputType | null
    _sum: FlagSumAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  export type FlagAvgAggregateOutputType = {
    color: number | null
  }

  export type FlagSumAggregateOutputType = {
    color: number | null
  }

  export type FlagMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlagCountAggregateOutputType = {
    id: number
    name: number
    description: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlagAvgAggregateInputType = {
    color?: true
  }

  export type FlagSumAggregateInputType = {
    color?: true
  }

  export type FlagMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlagMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlagCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlagAggregateArgs = {
    /**
     * Filter which Flag to aggregate.
     * 
    **/
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     * 
    **/
    orderBy?: Enumerable<FlagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flags
    **/
    _count?: true | FlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlagMaxAggregateInputType
  }

  export type GetFlagAggregateType<T extends FlagAggregateArgs> = {
        [P in keyof T & keyof AggregateFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlag[P]>
      : GetScalarType<T[P], AggregateFlag[P]>
  }




  export type FlagGroupByArgs = {
    where?: FlagWhereInput
    orderBy?: Enumerable<FlagOrderByWithAggregationInput>
    by: Array<FlagScalarFieldEnum>
    having?: FlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlagCountAggregateInputType | true
    _avg?: FlagAvgAggregateInputType
    _sum?: FlagSumAggregateInputType
    _min?: FlagMinAggregateInputType
    _max?: FlagMaxAggregateInputType
  }


  export type FlagGroupByOutputType = {
    id: string
    name: string
    description: string
    color: number
    createdAt: Date
    updatedAt: Date
    _count: FlagCountAggregateOutputType | null
    _avg: FlagAvgAggregateOutputType | null
    _sum: FlagSumAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  type GetFlagGroupByPayload<T extends FlagGroupByArgs> = Promise<
    Array<
      PickArray<FlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlagGroupByOutputType[P]>
            : GetScalarType<T[P], FlagGroupByOutputType[P]>
        }
      >
    >


  export type FlagSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reports?: boolean | ReportFindManyArgs
    _count?: boolean | FlagCountOutputTypeArgs
  }

  export type FlagInclude = {
    reports?: boolean | ReportFindManyArgs
    _count?: boolean | FlagCountOutputTypeArgs
  }

  export type FlagGetPayload<
    S extends boolean | null | undefined | FlagArgs,
    U = keyof S
      > = S extends true
        ? Flag
    : S extends undefined
    ? never
    : S extends FlagArgs | FlagFindManyArgs
    ?'include' extends U
    ? Flag  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'reports'
        ? Array < ReportGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? FlagCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Flag ?Flag [P]
  : 
          P extends 'reports'
        ? Array < ReportGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? FlagCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Flag
  : Flag


  type FlagCountArgs = Merge<
    Omit<FlagFindManyArgs, 'select' | 'include'> & {
      select?: FlagCountAggregateInputType | true
    }
  >

  export interface FlagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Flag that matches the filter.
     * @param {FlagFindUniqueArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FlagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FlagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Flag'> extends True ? CheckSelect<T, Prisma__FlagClient<Flag>, Prisma__FlagClient<FlagGetPayload<T>>> : CheckSelect<T, Prisma__FlagClient<Flag | null >, Prisma__FlagClient<FlagGetPayload<T> | null >>

    /**
     * Find the first Flag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindFirstArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FlagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FlagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Flag'> extends True ? CheckSelect<T, Prisma__FlagClient<Flag>, Prisma__FlagClient<FlagGetPayload<T>>> : CheckSelect<T, Prisma__FlagClient<Flag | null >, Prisma__FlagClient<FlagGetPayload<T> | null >>

    /**
     * Find zero or more Flags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flags
     * const flags = await prisma.flag.findMany()
     * 
     * // Get first 10 Flags
     * const flags = await prisma.flag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flagWithIdOnly = await prisma.flag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FlagFindManyArgs>(
      args?: SelectSubset<T, FlagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Flag>>, PrismaPromise<Array<FlagGetPayload<T>>>>

    /**
     * Create a Flag.
     * @param {FlagCreateArgs} args - Arguments to create a Flag.
     * @example
     * // Create one Flag
     * const Flag = await prisma.flag.create({
     *   data: {
     *     // ... data to create a Flag
     *   }
     * })
     * 
    **/
    create<T extends FlagCreateArgs>(
      args: SelectSubset<T, FlagCreateArgs>
    ): CheckSelect<T, Prisma__FlagClient<Flag>, Prisma__FlagClient<FlagGetPayload<T>>>

    /**
     * Create many Flags.
     *     @param {FlagCreateManyArgs} args - Arguments to create many Flags.
     *     @example
     *     // Create many Flags
     *     const flag = await prisma.flag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FlagCreateManyArgs>(
      args?: SelectSubset<T, FlagCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Flag.
     * @param {FlagDeleteArgs} args - Arguments to delete one Flag.
     * @example
     * // Delete one Flag
     * const Flag = await prisma.flag.delete({
     *   where: {
     *     // ... filter to delete one Flag
     *   }
     * })
     * 
    **/
    delete<T extends FlagDeleteArgs>(
      args: SelectSubset<T, FlagDeleteArgs>
    ): CheckSelect<T, Prisma__FlagClient<Flag>, Prisma__FlagClient<FlagGetPayload<T>>>

    /**
     * Update one Flag.
     * @param {FlagUpdateArgs} args - Arguments to update one Flag.
     * @example
     * // Update one Flag
     * const flag = await prisma.flag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FlagUpdateArgs>(
      args: SelectSubset<T, FlagUpdateArgs>
    ): CheckSelect<T, Prisma__FlagClient<Flag>, Prisma__FlagClient<FlagGetPayload<T>>>

    /**
     * Delete zero or more Flags.
     * @param {FlagDeleteManyArgs} args - Arguments to filter Flags to delete.
     * @example
     * // Delete a few Flags
     * const { count } = await prisma.flag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FlagDeleteManyArgs>(
      args?: SelectSubset<T, FlagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flags
     * const flag = await prisma.flag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FlagUpdateManyArgs>(
      args: SelectSubset<T, FlagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Flag.
     * @param {FlagUpsertArgs} args - Arguments to update or create a Flag.
     * @example
     * // Update or create a Flag
     * const flag = await prisma.flag.upsert({
     *   create: {
     *     // ... data to create a Flag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flag we want to update
     *   }
     * })
    **/
    upsert<T extends FlagUpsertArgs>(
      args: SelectSubset<T, FlagUpsertArgs>
    ): CheckSelect<T, Prisma__FlagClient<Flag>, Prisma__FlagClient<FlagGetPayload<T>>>

    /**
     * Count the number of Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagCountArgs} args - Arguments to filter Flags to count.
     * @example
     * // Count the number of Flags
     * const count = await prisma.flag.count({
     *   where: {
     *     // ... the filter for the Flags we want to count
     *   }
     * })
    **/
    count<T extends FlagCountArgs>(
      args?: Subset<T, FlagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlagAggregateArgs>(args: Subset<T, FlagAggregateArgs>): PrismaPromise<GetFlagAggregateType<T>>

    /**
     * Group by Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlagGroupByArgs['orderBy'] }
        : { orderBy?: FlagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlagGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FlagClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    reports<T extends ReportFindManyArgs = {}>(args?: Subset<T, ReportFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Report>>, PrismaPromise<Array<ReportGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Flag findUnique
   */
  export type FlagFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Flag
     * 
    **/
    select?: FlagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FlagInclude | null
    /**
     * Throw an Error if a Flag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Flag to fetch.
     * 
    **/
    where: FlagWhereUniqueInput
  }


  /**
   * Flag findFirst
   */
  export type FlagFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Flag
     * 
    **/
    select?: FlagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FlagInclude | null
    /**
     * Throw an Error if a Flag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Flag to fetch.
     * 
    **/
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     * 
    **/
    orderBy?: Enumerable<FlagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flags.
     * 
    **/
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flags.
     * 
    **/
    distinct?: Enumerable<FlagScalarFieldEnum>
  }


  /**
   * Flag findMany
   */
  export type FlagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Flag
     * 
    **/
    select?: FlagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FlagInclude | null
    /**
     * Filter, which Flags to fetch.
     * 
    **/
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     * 
    **/
    orderBy?: Enumerable<FlagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flags.
     * 
    **/
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FlagScalarFieldEnum>
  }


  /**
   * Flag create
   */
  export type FlagCreateArgs = {
    /**
     * Select specific fields to fetch from the Flag
     * 
    **/
    select?: FlagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FlagInclude | null
    /**
     * The data needed to create a Flag.
     * 
    **/
    data: XOR<FlagCreateInput, FlagUncheckedCreateInput>
  }


  /**
   * Flag createMany
   */
  export type FlagCreateManyArgs = {
    data: Enumerable<FlagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Flag update
   */
  export type FlagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Flag
     * 
    **/
    select?: FlagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FlagInclude | null
    /**
     * The data needed to update a Flag.
     * 
    **/
    data: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
    /**
     * Choose, which Flag to update.
     * 
    **/
    where: FlagWhereUniqueInput
  }


  /**
   * Flag updateMany
   */
  export type FlagUpdateManyArgs = {
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyInput>
    where?: FlagWhereInput
  }


  /**
   * Flag upsert
   */
  export type FlagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Flag
     * 
    **/
    select?: FlagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FlagInclude | null
    /**
     * The filter to search for the Flag to update in case it exists.
     * 
    **/
    where: FlagWhereUniqueInput
    /**
     * In case the Flag found by the `where` argument doesn't exist, create a new Flag with this data.
     * 
    **/
    create: XOR<FlagCreateInput, FlagUncheckedCreateInput>
    /**
     * In case the Flag was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
  }


  /**
   * Flag delete
   */
  export type FlagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Flag
     * 
    **/
    select?: FlagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FlagInclude | null
    /**
     * Filter which Flag to delete.
     * 
    **/
    where: FlagWhereUniqueInput
  }


  /**
   * Flag deleteMany
   */
  export type FlagDeleteManyArgs = {
    where?: FlagWhereInput
  }


  /**
   * Flag without action
   */
  export type FlagArgs = {
    /**
     * Select specific fields to fetch from the Flag
     * 
    **/
    select?: FlagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FlagInclude | null
  }



  /**
   * Model Report
   */


  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reporterUserId: string | null
    flagId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reporterUserId: string | null
    flagId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    userId: number
    reporterUserId: number
    flagId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    userId?: true
    reporterUserId?: true
    flagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    userId?: true
    reporterUserId?: true
    flagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    userId?: true
    reporterUserId?: true
    flagId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs = {
    /**
     * Filter which Report to aggregate.
     * 
    **/
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     * 
    **/
    orderBy?: Enumerable<ReportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs = {
    where?: ReportWhereInput
    orderBy?: Enumerable<ReportOrderByWithAggregationInput>
    by: Array<ReportScalarFieldEnum>
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }


  export type ReportGroupByOutputType = {
    id: string
    userId: string
    reporterUserId: string
    flagId: string
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Promise<
    Array<
      PickArray<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect = {
    id?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    reporterUserId?: boolean
    reporterUser?: boolean | UserArgs
    flagId?: boolean
    flag?: boolean | FlagArgs
    appeal?: boolean | AppealArgs
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportInclude = {
    user?: boolean | UserArgs
    reporterUser?: boolean | UserArgs
    flag?: boolean | FlagArgs
    appeal?: boolean | AppealArgs
  }

  export type ReportGetPayload<
    S extends boolean | null | undefined | ReportArgs,
    U = keyof S
      > = S extends true
        ? Report
    : S extends undefined
    ? never
    : S extends ReportArgs | ReportFindManyArgs
    ?'include' extends U
    ? Report  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> :
        P extends 'reporterUser'
        ? UserGetPayload<S['include'][P]> :
        P extends 'flag'
        ? FlagGetPayload<S['include'][P]> :
        P extends 'appeal'
        ? AppealGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Report ?Report [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'reporterUser'
        ? UserGetPayload<S['select'][P]> :
        P extends 'flag'
        ? FlagGetPayload<S['select'][P]> :
        P extends 'appeal'
        ? AppealGetPayload<S['select'][P]> | null : never
  } 
    : Report
  : Report


  type ReportCountArgs = Merge<
    Omit<ReportFindManyArgs, 'select' | 'include'> & {
      select?: ReportCountAggregateInputType | true
    }
  >

  export interface ReportDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReportFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReportFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Report'> extends True ? CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>> : CheckSelect<T, Prisma__ReportClient<Report | null >, Prisma__ReportClient<ReportGetPayload<T> | null >>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReportFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReportFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Report'> extends True ? CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>> : CheckSelect<T, Prisma__ReportClient<Report | null >, Prisma__ReportClient<ReportGetPayload<T> | null >>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReportFindManyArgs>(
      args?: SelectSubset<T, ReportFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Report>>, PrismaPromise<Array<ReportGetPayload<T>>>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
    **/
    create<T extends ReportCreateArgs>(
      args: SelectSubset<T, ReportCreateArgs>
    ): CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>>

    /**
     * Create many Reports.
     *     @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     *     @example
     *     // Create many Reports
     *     const report = await prisma.report.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReportCreateManyArgs>(
      args?: SelectSubset<T, ReportCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
    **/
    delete<T extends ReportDeleteArgs>(
      args: SelectSubset<T, ReportDeleteArgs>
    ): CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReportUpdateArgs>(
      args: SelectSubset<T, ReportUpdateArgs>
    ): CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReportDeleteManyArgs>(
      args?: SelectSubset<T, ReportDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReportUpdateManyArgs>(
      args: SelectSubset<T, ReportUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
    **/
    upsert<T extends ReportUpsertArgs>(
      args: SelectSubset<T, ReportUpsertArgs>
    ): CheckSelect<T, Prisma__ReportClient<Report>, Prisma__ReportClient<ReportGetPayload<T>>>

    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReportClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    reporterUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    flag<T extends FlagArgs = {}>(args?: Subset<T, FlagArgs>): CheckSelect<T, Prisma__FlagClient<Flag | null >, Prisma__FlagClient<FlagGetPayload<T> | null >>;

    appeal<T extends AppealArgs = {}>(args?: Subset<T, AppealArgs>): CheckSelect<T, Prisma__AppealClient<Appeal | null >, Prisma__AppealClient<AppealGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * Throw an Error if a Report can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Report to fetch.
     * 
    **/
    where: ReportWhereUniqueInput
  }


  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * Throw an Error if a Report can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Report to fetch.
     * 
    **/
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     * 
    **/
    orderBy?: Enumerable<ReportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     * 
    **/
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     * 
    **/
    distinct?: Enumerable<ReportScalarFieldEnum>
  }


  /**
   * Report findMany
   */
  export type ReportFindManyArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * Filter, which Reports to fetch.
     * 
    **/
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     * 
    **/
    orderBy?: Enumerable<ReportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     * 
    **/
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ReportScalarFieldEnum>
  }


  /**
   * Report create
   */
  export type ReportCreateArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * The data needed to create a Report.
     * 
    **/
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }


  /**
   * Report createMany
   */
  export type ReportCreateManyArgs = {
    data: Enumerable<ReportCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Report update
   */
  export type ReportUpdateArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * The data needed to update a Report.
     * 
    **/
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     * 
    **/
    where: ReportWhereUniqueInput
  }


  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs = {
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    where?: ReportWhereInput
  }


  /**
   * Report upsert
   */
  export type ReportUpsertArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * The filter to search for the Report to update in case it exists.
     * 
    **/
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     * 
    **/
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }


  /**
   * Report delete
   */
  export type ReportDeleteArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
    /**
     * Filter which Report to delete.
     * 
    **/
    where: ReportWhereUniqueInput
  }


  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs = {
    where?: ReportWhereInput
  }


  /**
   * Report without action
   */
  export type ReportArgs = {
    /**
     * Select specific fields to fetch from the Report
     * 
    **/
    select?: ReportSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReportInclude | null
  }



  /**
   * Model Appeal
   */


  export type AggregateAppeal = {
    _count: AppealCountAggregateOutputType | null
    _min: AppealMinAggregateOutputType | null
    _max: AppealMaxAggregateOutputType | null
  }

  export type AppealMinAggregateOutputType = {
    id: string | null
    reason: string | null
    isSuccessful: boolean | null
    resolvedReason: string | null
    resolvedAt: Date | null
    resolverUserId: string | null
    reportId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppealMaxAggregateOutputType = {
    id: string | null
    reason: string | null
    isSuccessful: boolean | null
    resolvedReason: string | null
    resolvedAt: Date | null
    resolverUserId: string | null
    reportId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppealCountAggregateOutputType = {
    id: number
    reason: number
    isSuccessful: number
    resolvedReason: number
    resolvedAt: number
    resolverUserId: number
    reportId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppealMinAggregateInputType = {
    id?: true
    reason?: true
    isSuccessful?: true
    resolvedReason?: true
    resolvedAt?: true
    resolverUserId?: true
    reportId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppealMaxAggregateInputType = {
    id?: true
    reason?: true
    isSuccessful?: true
    resolvedReason?: true
    resolvedAt?: true
    resolverUserId?: true
    reportId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppealCountAggregateInputType = {
    id?: true
    reason?: true
    isSuccessful?: true
    resolvedReason?: true
    resolvedAt?: true
    resolverUserId?: true
    reportId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppealAggregateArgs = {
    /**
     * Filter which Appeal to aggregate.
     * 
    **/
    where?: AppealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appeals to fetch.
     * 
    **/
    orderBy?: Enumerable<AppealOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AppealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appeals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appeals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appeals
    **/
    _count?: true | AppealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppealMaxAggregateInputType
  }

  export type GetAppealAggregateType<T extends AppealAggregateArgs> = {
        [P in keyof T & keyof AggregateAppeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppeal[P]>
      : GetScalarType<T[P], AggregateAppeal[P]>
  }




  export type AppealGroupByArgs = {
    where?: AppealWhereInput
    orderBy?: Enumerable<AppealOrderByWithAggregationInput>
    by: Array<AppealScalarFieldEnum>
    having?: AppealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppealCountAggregateInputType | true
    _min?: AppealMinAggregateInputType
    _max?: AppealMaxAggregateInputType
  }


  export type AppealGroupByOutputType = {
    id: string
    reason: string
    isSuccessful: boolean
    resolvedReason: string | null
    resolvedAt: Date | null
    resolverUserId: string
    reportId: string
    createdAt: Date
    updatedAt: Date
    _count: AppealCountAggregateOutputType | null
    _min: AppealMinAggregateOutputType | null
    _max: AppealMaxAggregateOutputType | null
  }

  type GetAppealGroupByPayload<T extends AppealGroupByArgs> = Promise<
    Array<
      PickArray<AppealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppealGroupByOutputType[P]>
            : GetScalarType<T[P], AppealGroupByOutputType[P]>
        }
      >
    >


  export type AppealSelect = {
    id?: boolean
    reason?: boolean
    isSuccessful?: boolean
    resolvedReason?: boolean
    resolvedAt?: boolean
    resolverUserId?: boolean
    resolverUser?: boolean | UserArgs
    reportId?: boolean
    report?: boolean | ReportArgs
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppealInclude = {
    resolverUser?: boolean | UserArgs
    report?: boolean | ReportArgs
  }

  export type AppealGetPayload<
    S extends boolean | null | undefined | AppealArgs,
    U = keyof S
      > = S extends true
        ? Appeal
    : S extends undefined
    ? never
    : S extends AppealArgs | AppealFindManyArgs
    ?'include' extends U
    ? Appeal  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'resolverUser'
        ? UserGetPayload<S['include'][P]> :
        P extends 'report'
        ? ReportGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Appeal ?Appeal [P]
  : 
          P extends 'resolverUser'
        ? UserGetPayload<S['select'][P]> :
        P extends 'report'
        ? ReportGetPayload<S['select'][P]> : never
  } 
    : Appeal
  : Appeal


  type AppealCountArgs = Merge<
    Omit<AppealFindManyArgs, 'select' | 'include'> & {
      select?: AppealCountAggregateInputType | true
    }
  >

  export interface AppealDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Appeal that matches the filter.
     * @param {AppealFindUniqueArgs} args - Arguments to find a Appeal
     * @example
     * // Get one Appeal
     * const appeal = await prisma.appeal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppealFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AppealFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Appeal'> extends True ? CheckSelect<T, Prisma__AppealClient<Appeal>, Prisma__AppealClient<AppealGetPayload<T>>> : CheckSelect<T, Prisma__AppealClient<Appeal | null >, Prisma__AppealClient<AppealGetPayload<T> | null >>

    /**
     * Find the first Appeal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealFindFirstArgs} args - Arguments to find a Appeal
     * @example
     * // Get one Appeal
     * const appeal = await prisma.appeal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppealFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AppealFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Appeal'> extends True ? CheckSelect<T, Prisma__AppealClient<Appeal>, Prisma__AppealClient<AppealGetPayload<T>>> : CheckSelect<T, Prisma__AppealClient<Appeal | null >, Prisma__AppealClient<AppealGetPayload<T> | null >>

    /**
     * Find zero or more Appeals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appeals
     * const appeals = await prisma.appeal.findMany()
     * 
     * // Get first 10 Appeals
     * const appeals = await prisma.appeal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appealWithIdOnly = await prisma.appeal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppealFindManyArgs>(
      args?: SelectSubset<T, AppealFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Appeal>>, PrismaPromise<Array<AppealGetPayload<T>>>>

    /**
     * Create a Appeal.
     * @param {AppealCreateArgs} args - Arguments to create a Appeal.
     * @example
     * // Create one Appeal
     * const Appeal = await prisma.appeal.create({
     *   data: {
     *     // ... data to create a Appeal
     *   }
     * })
     * 
    **/
    create<T extends AppealCreateArgs>(
      args: SelectSubset<T, AppealCreateArgs>
    ): CheckSelect<T, Prisma__AppealClient<Appeal>, Prisma__AppealClient<AppealGetPayload<T>>>

    /**
     * Create many Appeals.
     *     @param {AppealCreateManyArgs} args - Arguments to create many Appeals.
     *     @example
     *     // Create many Appeals
     *     const appeal = await prisma.appeal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AppealCreateManyArgs>(
      args?: SelectSubset<T, AppealCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Appeal.
     * @param {AppealDeleteArgs} args - Arguments to delete one Appeal.
     * @example
     * // Delete one Appeal
     * const Appeal = await prisma.appeal.delete({
     *   where: {
     *     // ... filter to delete one Appeal
     *   }
     * })
     * 
    **/
    delete<T extends AppealDeleteArgs>(
      args: SelectSubset<T, AppealDeleteArgs>
    ): CheckSelect<T, Prisma__AppealClient<Appeal>, Prisma__AppealClient<AppealGetPayload<T>>>

    /**
     * Update one Appeal.
     * @param {AppealUpdateArgs} args - Arguments to update one Appeal.
     * @example
     * // Update one Appeal
     * const appeal = await prisma.appeal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppealUpdateArgs>(
      args: SelectSubset<T, AppealUpdateArgs>
    ): CheckSelect<T, Prisma__AppealClient<Appeal>, Prisma__AppealClient<AppealGetPayload<T>>>

    /**
     * Delete zero or more Appeals.
     * @param {AppealDeleteManyArgs} args - Arguments to filter Appeals to delete.
     * @example
     * // Delete a few Appeals
     * const { count } = await prisma.appeal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppealDeleteManyArgs>(
      args?: SelectSubset<T, AppealDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appeals
     * const appeal = await prisma.appeal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppealUpdateManyArgs>(
      args: SelectSubset<T, AppealUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Appeal.
     * @param {AppealUpsertArgs} args - Arguments to update or create a Appeal.
     * @example
     * // Update or create a Appeal
     * const appeal = await prisma.appeal.upsert({
     *   create: {
     *     // ... data to create a Appeal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appeal we want to update
     *   }
     * })
    **/
    upsert<T extends AppealUpsertArgs>(
      args: SelectSubset<T, AppealUpsertArgs>
    ): CheckSelect<T, Prisma__AppealClient<Appeal>, Prisma__AppealClient<AppealGetPayload<T>>>

    /**
     * Count the number of Appeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealCountArgs} args - Arguments to filter Appeals to count.
     * @example
     * // Count the number of Appeals
     * const count = await prisma.appeal.count({
     *   where: {
     *     // ... the filter for the Appeals we want to count
     *   }
     * })
    **/
    count<T extends AppealCountArgs>(
      args?: Subset<T, AppealCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appeal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppealAggregateArgs>(args: Subset<T, AppealAggregateArgs>): PrismaPromise<GetAppealAggregateType<T>>

    /**
     * Group by Appeal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppealGroupByArgs['orderBy'] }
        : { orderBy?: AppealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppealGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appeal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AppealClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    resolverUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    report<T extends ReportArgs = {}>(args?: Subset<T, ReportArgs>): CheckSelect<T, Prisma__ReportClient<Report | null >, Prisma__ReportClient<ReportGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Appeal findUnique
   */
  export type AppealFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Appeal
     * 
    **/
    select?: AppealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppealInclude | null
    /**
     * Throw an Error if a Appeal can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Appeal to fetch.
     * 
    **/
    where: AppealWhereUniqueInput
  }


  /**
   * Appeal findFirst
   */
  export type AppealFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Appeal
     * 
    **/
    select?: AppealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppealInclude | null
    /**
     * Throw an Error if a Appeal can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Appeal to fetch.
     * 
    **/
    where?: AppealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appeals to fetch.
     * 
    **/
    orderBy?: Enumerable<AppealOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appeals.
     * 
    **/
    cursor?: AppealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appeals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appeals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appeals.
     * 
    **/
    distinct?: Enumerable<AppealScalarFieldEnum>
  }


  /**
   * Appeal findMany
   */
  export type AppealFindManyArgs = {
    /**
     * Select specific fields to fetch from the Appeal
     * 
    **/
    select?: AppealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppealInclude | null
    /**
     * Filter, which Appeals to fetch.
     * 
    **/
    where?: AppealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appeals to fetch.
     * 
    **/
    orderBy?: Enumerable<AppealOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appeals.
     * 
    **/
    cursor?: AppealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appeals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appeals.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AppealScalarFieldEnum>
  }


  /**
   * Appeal create
   */
  export type AppealCreateArgs = {
    /**
     * Select specific fields to fetch from the Appeal
     * 
    **/
    select?: AppealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppealInclude | null
    /**
     * The data needed to create a Appeal.
     * 
    **/
    data: XOR<AppealCreateInput, AppealUncheckedCreateInput>
  }


  /**
   * Appeal createMany
   */
  export type AppealCreateManyArgs = {
    data: Enumerable<AppealCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Appeal update
   */
  export type AppealUpdateArgs = {
    /**
     * Select specific fields to fetch from the Appeal
     * 
    **/
    select?: AppealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppealInclude | null
    /**
     * The data needed to update a Appeal.
     * 
    **/
    data: XOR<AppealUpdateInput, AppealUncheckedUpdateInput>
    /**
     * Choose, which Appeal to update.
     * 
    **/
    where: AppealWhereUniqueInput
  }


  /**
   * Appeal updateMany
   */
  export type AppealUpdateManyArgs = {
    data: XOR<AppealUpdateManyMutationInput, AppealUncheckedUpdateManyInput>
    where?: AppealWhereInput
  }


  /**
   * Appeal upsert
   */
  export type AppealUpsertArgs = {
    /**
     * Select specific fields to fetch from the Appeal
     * 
    **/
    select?: AppealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppealInclude | null
    /**
     * The filter to search for the Appeal to update in case it exists.
     * 
    **/
    where: AppealWhereUniqueInput
    /**
     * In case the Appeal found by the `where` argument doesn't exist, create a new Appeal with this data.
     * 
    **/
    create: XOR<AppealCreateInput, AppealUncheckedCreateInput>
    /**
     * In case the Appeal was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AppealUpdateInput, AppealUncheckedUpdateInput>
  }


  /**
   * Appeal delete
   */
  export type AppealDeleteArgs = {
    /**
     * Select specific fields to fetch from the Appeal
     * 
    **/
    select?: AppealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppealInclude | null
    /**
     * Filter which Appeal to delete.
     * 
    **/
    where: AppealWhereUniqueInput
  }


  /**
   * Appeal deleteMany
   */
  export type AppealDeleteManyArgs = {
    where?: AppealWhereInput
  }


  /**
   * Appeal without action
   */
  export type AppealArgs = {
    /**
     * Select specific fields to fetch from the Appeal
     * 
    **/
    select?: AppealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AppealInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    discriminator: 'discriminator',
    avatar: 'avatar',
    sitePermissions: 'sitePermissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    invalid: 'invalid',
    device: 'device',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    token: 'token',
    version: 'version',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    requestCount: 'requestCount',
    requestLimit: 'requestLimit',
    requestLimitResetAt: 'requestLimitResetAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId',
    userId: 'userId'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const FlagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlagScalarFieldEnum = (typeof FlagScalarFieldEnum)[keyof typeof FlagScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reporterUserId: 'reporterUserId',
    flagId: 'flagId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const AppealScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    isSuccessful: 'isSuccessful',
    resolvedReason: 'resolvedReason',
    resolvedAt: 'resolvedAt',
    resolverUserId: 'resolverUserId',
    reportId: 'reportId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppealScalarFieldEnum = (typeof AppealScalarFieldEnum)[keyof typeof AppealScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    discriminator?: StringFilter | string
    avatar?: StringNullableFilter | string | null
    sitePermissions?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    sessions?: SessionListRelationFilter
    applications?: ApplicationListRelationFilter
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput> | null
    reports?: ReportListRelationFilter
    reporterReports?: ReportListRelationFilter
    resolverAppeals?: AppealListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    discriminator?: SortOrder
    avatar?: SortOrder
    sitePermissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    application?: ApplicationOrderByWithRelationInput
    reports?: ReportOrderByRelationAggregateInput
    reporterReports?: ReportOrderByRelationAggregateInput
    resolverAppeals?: AppealOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    discriminator?: SortOrder
    avatar?: SortOrder
    sitePermissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    discriminator?: StringWithAggregatesFilter | string
    avatar?: StringNullableWithAggregatesFilter | string | null
    sitePermissions?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    invalid?: BoolFilter | boolean
    device?: StringFilter | string
    accessToken?: StringFilter | string
    refreshToken?: StringFilter | string
    token?: StringFilter | string
    version?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    expiresAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    invalid?: SortOrder
    device?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    token?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = {
    id?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    invalid?: SortOrder
    device?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    token?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    invalid?: BoolWithAggregatesFilter | boolean
    device?: StringWithAggregatesFilter | string
    accessToken?: StringWithAggregatesFilter | string
    refreshToken?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    version?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringWithAggregatesFilter | string
  }

  export type ApplicationWhereInput = {
    AND?: Enumerable<ApplicationWhereInput>
    OR?: Enumerable<ApplicationWhereInput>
    NOT?: Enumerable<ApplicationWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    requestCount?: IntFilter | number
    requestLimit?: IntFilter | number
    requestLimitResetAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ownerId?: StringFilter | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    requestCount?: SortOrder
    requestLimit?: SortOrder
    requestLimitResetAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = {
    id?: string
    userId?: string
  }

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    requestCount?: SortOrder
    requestLimit?: SortOrder
    requestLimitResetAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    userId?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ApplicationScalarWhereWithAggregatesInput>
    OR?: Enumerable<ApplicationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ApplicationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    requestCount?: IntWithAggregatesFilter | number
    requestLimit?: IntWithAggregatesFilter | number
    requestLimitResetAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    ownerId?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type FlagWhereInput = {
    AND?: Enumerable<FlagWhereInput>
    OR?: Enumerable<FlagWhereInput>
    NOT?: Enumerable<FlagWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    color?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    reports?: ReportListRelationFilter
  }

  export type FlagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reports?: ReportOrderByRelationAggregateInput
  }

  export type FlagWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type FlagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlagCountOrderByAggregateInput
    _avg?: FlagAvgOrderByAggregateInput
    _max?: FlagMaxOrderByAggregateInput
    _min?: FlagMinOrderByAggregateInput
    _sum?: FlagSumOrderByAggregateInput
  }

  export type FlagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FlagScalarWhereWithAggregatesInput>
    OR?: Enumerable<FlagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FlagScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    color?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ReportWhereInput = {
    AND?: Enumerable<ReportWhereInput>
    OR?: Enumerable<ReportWhereInput>
    NOT?: Enumerable<ReportWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    reporterUserId?: StringFilter | string
    reporterUser?: XOR<UserRelationFilter, UserWhereInput>
    flagId?: StringFilter | string
    flag?: XOR<FlagRelationFilter, FlagWhereInput>
    appeal?: XOR<AppealRelationFilter, AppealWhereInput> | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    reporterUserId?: SortOrder
    reporterUser?: UserOrderByWithRelationInput
    flagId?: SortOrder
    flag?: FlagOrderByWithRelationInput
    appeal?: AppealOrderByWithRelationInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportWhereUniqueInput = {
    id?: string
  }

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reporterUserId?: SortOrder
    flagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReportScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReportScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReportScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    reporterUserId?: StringWithAggregatesFilter | string
    flagId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AppealWhereInput = {
    AND?: Enumerable<AppealWhereInput>
    OR?: Enumerable<AppealWhereInput>
    NOT?: Enumerable<AppealWhereInput>
    id?: StringFilter | string
    reason?: StringFilter | string
    isSuccessful?: BoolFilter | boolean
    resolvedReason?: StringNullableFilter | string | null
    resolvedAt?: DateTimeNullableFilter | Date | string | null
    resolverUserId?: StringFilter | string
    resolverUser?: XOR<UserRelationFilter, UserWhereInput>
    reportId?: StringFilter | string
    report?: XOR<ReportRelationFilter, ReportWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AppealOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    isSuccessful?: SortOrder
    resolvedReason?: SortOrder
    resolvedAt?: SortOrder
    resolverUserId?: SortOrder
    resolverUser?: UserOrderByWithRelationInput
    reportId?: SortOrder
    report?: ReportOrderByWithRelationInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppealWhereUniqueInput = {
    id?: string
    reportId?: string
  }

  export type AppealOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    isSuccessful?: SortOrder
    resolvedReason?: SortOrder
    resolvedAt?: SortOrder
    resolverUserId?: SortOrder
    reportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppealCountOrderByAggregateInput
    _max?: AppealMaxOrderByAggregateInput
    _min?: AppealMinOrderByAggregateInput
  }

  export type AppealScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AppealScalarWhereWithAggregatesInput>
    OR?: Enumerable<AppealScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AppealScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    reason?: StringWithAggregatesFilter | string
    isSuccessful?: BoolWithAggregatesFilter | boolean
    resolvedReason?: StringNullableWithAggregatesFilter | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    resolverUserId?: StringWithAggregatesFilter | string
    reportId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutOwnerInput
    application?: ApplicationCreateNestedOneWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reporterReports?: ReportCreateNestedManyWithoutReporterUserInput
    resolverAppeals?: AppealCreateNestedManyWithoutResolverUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOwnerInput
    application?: ApplicationUncheckedCreateNestedOneWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reporterReports?: ReportUncheckedCreateNestedManyWithoutReporterUserInput
    resolverAppeals?: AppealUncheckedCreateNestedManyWithoutResolverUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserInput
    applications?: ApplicationUpdateManyWithoutOwnerInput
    application?: ApplicationUpdateOneWithoutUserInput
    reports?: ReportUpdateManyWithoutUserInput
    reporterReports?: ReportUpdateManyWithoutReporterUserInput
    resolverAppeals?: AppealUpdateManyWithoutResolverUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    applications?: ApplicationUncheckedUpdateManyWithoutOwnerInput
    application?: ApplicationUncheckedUpdateOneWithoutUserInput
    reports?: ReportUncheckedUpdateManyWithoutUserInput
    reporterReports?: ReportUncheckedUpdateManyWithoutReporterUserInput
    resolverAppeals?: AppealUncheckedUpdateManyWithoutResolverUserInput
  }

  export type UserCreateManyInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    invalid: boolean
    device: string
    accessToken: string
    refreshToken: string
    token: string
    version: string
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    invalid: boolean
    device: string
    accessToken: string
    refreshToken: string
    token: string
    version: string
    createdAt?: Date | string
    expiresAt: Date | string
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invalid?: BoolFieldUpdateOperationsInput | boolean
    device?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invalid?: BoolFieldUpdateOperationsInput | boolean
    device?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    invalid: boolean
    device: string
    accessToken: string
    refreshToken: string
    token: string
    version: string
    createdAt?: Date | string
    expiresAt: Date | string
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invalid?: BoolFieldUpdateOperationsInput | boolean
    device?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invalid?: BoolFieldUpdateOperationsInput | boolean
    device?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationCreateInput = {
    id: string
    name: string
    requestCount: number
    requestLimit: number
    requestLimitResetAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutApplicationsInput
    user: UserCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id: string
    name: string
    requestCount: number
    requestLimit: number
    requestLimitResetAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    userId: string
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    requestLimit?: IntFieldUpdateOperationsInput | number
    requestLimitResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutApplicationsInput
    user?: UserUpdateOneRequiredWithoutApplicationInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    requestLimit?: IntFieldUpdateOperationsInput | number
    requestLimitResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationCreateManyInput = {
    id: string
    name: string
    requestCount: number
    requestLimit: number
    requestLimitResetAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    userId: string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    requestLimit?: IntFieldUpdateOperationsInput | number
    requestLimitResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    requestLimit?: IntFieldUpdateOperationsInput | number
    requestLimitResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FlagCreateInput = {
    id: string
    name: string
    description: string
    color: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportCreateNestedManyWithoutFlagInput
  }

  export type FlagUncheckedCreateInput = {
    id: string
    name: string
    description: string
    color: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutFlagInput
  }

  export type FlagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutFlagInput
  }

  export type FlagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutFlagInput
  }

  export type FlagCreateManyInput = {
    id: string
    name: string
    description: string
    color: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReportsInput
    reporterUser: UserCreateNestedOneWithoutReporterReportsInput
    flag: FlagCreateNestedOneWithoutReportsInput
    appeal?: AppealCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id: string
    userId: string
    reporterUserId: string
    flagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appeal?: AppealUncheckedCreateNestedOneWithoutReportInput
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportsInput
    reporterUser?: UserUpdateOneRequiredWithoutReporterReportsInput
    flag?: FlagUpdateOneRequiredWithoutReportsInput
    appeal?: AppealUpdateOneWithoutReportInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reporterUserId?: StringFieldUpdateOperationsInput | string
    flagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appeal?: AppealUncheckedUpdateOneWithoutReportInput
  }

  export type ReportCreateManyInput = {
    id: string
    userId: string
    reporterUserId: string
    flagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reporterUserId?: StringFieldUpdateOperationsInput | string
    flagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppealCreateInput = {
    id: string
    reason: string
    isSuccessful: boolean
    resolvedReason?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolverUser: UserCreateNestedOneWithoutResolverAppealsInput
    report: ReportCreateNestedOneWithoutAppealInput
  }

  export type AppealUncheckedCreateInput = {
    id: string
    reason: string
    isSuccessful: boolean
    resolvedReason?: string | null
    resolvedAt?: Date | string | null
    resolverUserId: string
    reportId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    resolvedReason?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolverUser?: UserUpdateOneRequiredWithoutResolverAppealsInput
    report?: ReportUpdateOneRequiredWithoutAppealInput
  }

  export type AppealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    resolvedReason?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolverUserId?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppealCreateManyInput = {
    id: string
    reason: string
    isSuccessful: boolean
    resolvedReason?: string | null
    resolvedAt?: Date | string | null
    resolverUserId: string
    reportId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    resolvedReason?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    resolvedReason?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolverUserId?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type ApplicationRelationFilter = {
    is?: ApplicationWhereInput | null
    isNot?: ApplicationWhereInput | null
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type AppealListRelationFilter = {
    every?: AppealWhereInput
    some?: AppealWhereInput
    none?: AppealWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    discriminator?: SortOrder
    avatar?: SortOrder
    sitePermissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    sitePermissions?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    discriminator?: SortOrder
    avatar?: SortOrder
    sitePermissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    discriminator?: SortOrder
    avatar?: SortOrder
    sitePermissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    sitePermissions?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    invalid?: SortOrder
    device?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    token?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    invalid?: SortOrder
    device?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    token?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    invalid?: SortOrder
    device?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    token?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    requestCount?: SortOrder
    requestLimit?: SortOrder
    requestLimitResetAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    userId?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    requestCount?: SortOrder
    requestLimit?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    requestCount?: SortOrder
    requestLimit?: SortOrder
    requestLimitResetAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    userId?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    requestCount?: SortOrder
    requestLimit?: SortOrder
    requestLimitResetAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    userId?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    requestCount?: SortOrder
    requestLimit?: SortOrder
  }

  export type FlagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlagAvgOrderByAggregateInput = {
    color?: SortOrder
  }

  export type FlagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlagSumOrderByAggregateInput = {
    color?: SortOrder
  }

  export type FlagRelationFilter = {
    is?: FlagWhereInput
    isNot?: FlagWhereInput
  }

  export type AppealRelationFilter = {
    is?: AppealWhereInput | null
    isNot?: AppealWhereInput | null
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reporterUserId?: SortOrder
    flagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reporterUserId?: SortOrder
    flagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reporterUserId?: SortOrder
    flagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type ReportRelationFilter = {
    is?: ReportWhereInput
    isNot?: ReportWhereInput
  }

  export type AppealCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    isSuccessful?: SortOrder
    resolvedReason?: SortOrder
    resolvedAt?: SortOrder
    resolverUserId?: SortOrder
    reportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppealMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    isSuccessful?: SortOrder
    resolvedReason?: SortOrder
    resolvedAt?: SortOrder
    resolverUserId?: SortOrder
    reportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppealMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    isSuccessful?: SortOrder
    resolvedReason?: SortOrder
    resolvedAt?: SortOrder
    resolverUserId?: SortOrder
    reportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type ApplicationCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutOwnerInput>, Enumerable<ApplicationUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutOwnerInput>
    createMany?: ApplicationCreateManyOwnerInputEnvelope
    connect?: Enumerable<ApplicationWhereUniqueInput>
  }

  export type ApplicationCreateNestedOneWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ReportCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReportCreateWithoutUserInput>, Enumerable<ReportUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutUserInput>
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: Enumerable<ReportWhereUniqueInput>
  }

  export type ReportCreateNestedManyWithoutReporterUserInput = {
    create?: XOR<Enumerable<ReportCreateWithoutReporterUserInput>, Enumerable<ReportUncheckedCreateWithoutReporterUserInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutReporterUserInput>
    createMany?: ReportCreateManyReporterUserInputEnvelope
    connect?: Enumerable<ReportWhereUniqueInput>
  }

  export type AppealCreateNestedManyWithoutResolverUserInput = {
    create?: XOR<Enumerable<AppealCreateWithoutResolverUserInput>, Enumerable<AppealUncheckedCreateWithoutResolverUserInput>>
    connectOrCreate?: Enumerable<AppealCreateOrConnectWithoutResolverUserInput>
    createMany?: AppealCreateManyResolverUserInputEnvelope
    connect?: Enumerable<AppealWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type ApplicationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutOwnerInput>, Enumerable<ApplicationUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutOwnerInput>
    createMany?: ApplicationCreateManyOwnerInputEnvelope
    connect?: Enumerable<ApplicationWhereUniqueInput>
  }

  export type ApplicationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReportCreateWithoutUserInput>, Enumerable<ReportUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutUserInput>
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: Enumerable<ReportWhereUniqueInput>
  }

  export type ReportUncheckedCreateNestedManyWithoutReporterUserInput = {
    create?: XOR<Enumerable<ReportCreateWithoutReporterUserInput>, Enumerable<ReportUncheckedCreateWithoutReporterUserInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutReporterUserInput>
    createMany?: ReportCreateManyReporterUserInputEnvelope
    connect?: Enumerable<ReportWhereUniqueInput>
  }

  export type AppealUncheckedCreateNestedManyWithoutResolverUserInput = {
    create?: XOR<Enumerable<AppealCreateWithoutResolverUserInput>, Enumerable<AppealUncheckedCreateWithoutResolverUserInput>>
    connectOrCreate?: Enumerable<AppealCreateOrConnectWithoutResolverUserInput>
    createMany?: AppealCreateManyResolverUserInputEnvelope
    connect?: Enumerable<AppealWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type ApplicationUpdateManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutOwnerInput>, Enumerable<ApplicationUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<ApplicationUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: ApplicationCreateManyOwnerInputEnvelope
    set?: Enumerable<ApplicationWhereUniqueInput>
    disconnect?: Enumerable<ApplicationWhereUniqueInput>
    delete?: Enumerable<ApplicationWhereUniqueInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
    update?: Enumerable<ApplicationUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<ApplicationUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<ApplicationScalarWhereInput>
  }

  export type ApplicationUpdateOneWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput
    upsert?: ApplicationUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ApplicationWhereUniqueInput
    update?: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ReportCreateWithoutUserInput>, Enumerable<ReportUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReportUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReportCreateManyUserInputEnvelope
    set?: Enumerable<ReportWhereUniqueInput>
    disconnect?: Enumerable<ReportWhereUniqueInput>
    delete?: Enumerable<ReportWhereUniqueInput>
    connect?: Enumerable<ReportWhereUniqueInput>
    update?: Enumerable<ReportUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReportUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReportScalarWhereInput>
  }

  export type ReportUpdateManyWithoutReporterUserInput = {
    create?: XOR<Enumerable<ReportCreateWithoutReporterUserInput>, Enumerable<ReportUncheckedCreateWithoutReporterUserInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutReporterUserInput>
    upsert?: Enumerable<ReportUpsertWithWhereUniqueWithoutReporterUserInput>
    createMany?: ReportCreateManyReporterUserInputEnvelope
    set?: Enumerable<ReportWhereUniqueInput>
    disconnect?: Enumerable<ReportWhereUniqueInput>
    delete?: Enumerable<ReportWhereUniqueInput>
    connect?: Enumerable<ReportWhereUniqueInput>
    update?: Enumerable<ReportUpdateWithWhereUniqueWithoutReporterUserInput>
    updateMany?: Enumerable<ReportUpdateManyWithWhereWithoutReporterUserInput>
    deleteMany?: Enumerable<ReportScalarWhereInput>
  }

  export type AppealUpdateManyWithoutResolverUserInput = {
    create?: XOR<Enumerable<AppealCreateWithoutResolverUserInput>, Enumerable<AppealUncheckedCreateWithoutResolverUserInput>>
    connectOrCreate?: Enumerable<AppealCreateOrConnectWithoutResolverUserInput>
    upsert?: Enumerable<AppealUpsertWithWhereUniqueWithoutResolverUserInput>
    createMany?: AppealCreateManyResolverUserInputEnvelope
    set?: Enumerable<AppealWhereUniqueInput>
    disconnect?: Enumerable<AppealWhereUniqueInput>
    delete?: Enumerable<AppealWhereUniqueInput>
    connect?: Enumerable<AppealWhereUniqueInput>
    update?: Enumerable<AppealUpdateWithWhereUniqueWithoutResolverUserInput>
    updateMany?: Enumerable<AppealUpdateManyWithWhereWithoutResolverUserInput>
    deleteMany?: Enumerable<AppealScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type ApplicationUncheckedUpdateManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutOwnerInput>, Enumerable<ApplicationUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<ApplicationUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: ApplicationCreateManyOwnerInputEnvelope
    set?: Enumerable<ApplicationWhereUniqueInput>
    disconnect?: Enumerable<ApplicationWhereUniqueInput>
    delete?: Enumerable<ApplicationWhereUniqueInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
    update?: Enumerable<ApplicationUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<ApplicationUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<ApplicationScalarWhereInput>
  }

  export type ApplicationUncheckedUpdateOneWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput
    upsert?: ApplicationUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ApplicationWhereUniqueInput
    update?: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
  }

  export type ReportUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ReportCreateWithoutUserInput>, Enumerable<ReportUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReportUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReportCreateManyUserInputEnvelope
    set?: Enumerable<ReportWhereUniqueInput>
    disconnect?: Enumerable<ReportWhereUniqueInput>
    delete?: Enumerable<ReportWhereUniqueInput>
    connect?: Enumerable<ReportWhereUniqueInput>
    update?: Enumerable<ReportUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReportUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReportScalarWhereInput>
  }

  export type ReportUncheckedUpdateManyWithoutReporterUserInput = {
    create?: XOR<Enumerable<ReportCreateWithoutReporterUserInput>, Enumerable<ReportUncheckedCreateWithoutReporterUserInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutReporterUserInput>
    upsert?: Enumerable<ReportUpsertWithWhereUniqueWithoutReporterUserInput>
    createMany?: ReportCreateManyReporterUserInputEnvelope
    set?: Enumerable<ReportWhereUniqueInput>
    disconnect?: Enumerable<ReportWhereUniqueInput>
    delete?: Enumerable<ReportWhereUniqueInput>
    connect?: Enumerable<ReportWhereUniqueInput>
    update?: Enumerable<ReportUpdateWithWhereUniqueWithoutReporterUserInput>
    updateMany?: Enumerable<ReportUpdateManyWithWhereWithoutReporterUserInput>
    deleteMany?: Enumerable<ReportScalarWhereInput>
  }

  export type AppealUncheckedUpdateManyWithoutResolverUserInput = {
    create?: XOR<Enumerable<AppealCreateWithoutResolverUserInput>, Enumerable<AppealUncheckedCreateWithoutResolverUserInput>>
    connectOrCreate?: Enumerable<AppealCreateOrConnectWithoutResolverUserInput>
    upsert?: Enumerable<AppealUpsertWithWhereUniqueWithoutResolverUserInput>
    createMany?: AppealCreateManyResolverUserInputEnvelope
    set?: Enumerable<AppealWhereUniqueInput>
    disconnect?: Enumerable<AppealWhereUniqueInput>
    delete?: Enumerable<AppealWhereUniqueInput>
    connect?: Enumerable<AppealWhereUniqueInput>
    update?: Enumerable<AppealUpdateWithWhereUniqueWithoutResolverUserInput>
    updateMany?: Enumerable<AppealUpdateManyWithWhereWithoutResolverUserInput>
    deleteMany?: Enumerable<AppealScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicationInput = {
    create?: XOR<UserCreateWithoutApplicationInput, UserUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneRequiredWithoutApplicationInput = {
    create?: XOR<UserCreateWithoutApplicationInput, UserUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationInput
    upsert?: UserUpsertWithoutApplicationInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutApplicationInput, UserUncheckedUpdateWithoutApplicationInput>
  }

  export type ReportCreateNestedManyWithoutFlagInput = {
    create?: XOR<Enumerable<ReportCreateWithoutFlagInput>, Enumerable<ReportUncheckedCreateWithoutFlagInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutFlagInput>
    createMany?: ReportCreateManyFlagInputEnvelope
    connect?: Enumerable<ReportWhereUniqueInput>
  }

  export type ReportUncheckedCreateNestedManyWithoutFlagInput = {
    create?: XOR<Enumerable<ReportCreateWithoutFlagInput>, Enumerable<ReportUncheckedCreateWithoutFlagInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutFlagInput>
    createMany?: ReportCreateManyFlagInputEnvelope
    connect?: Enumerable<ReportWhereUniqueInput>
  }

  export type ReportUpdateManyWithoutFlagInput = {
    create?: XOR<Enumerable<ReportCreateWithoutFlagInput>, Enumerable<ReportUncheckedCreateWithoutFlagInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutFlagInput>
    upsert?: Enumerable<ReportUpsertWithWhereUniqueWithoutFlagInput>
    createMany?: ReportCreateManyFlagInputEnvelope
    set?: Enumerable<ReportWhereUniqueInput>
    disconnect?: Enumerable<ReportWhereUniqueInput>
    delete?: Enumerable<ReportWhereUniqueInput>
    connect?: Enumerable<ReportWhereUniqueInput>
    update?: Enumerable<ReportUpdateWithWhereUniqueWithoutFlagInput>
    updateMany?: Enumerable<ReportUpdateManyWithWhereWithoutFlagInput>
    deleteMany?: Enumerable<ReportScalarWhereInput>
  }

  export type ReportUncheckedUpdateManyWithoutFlagInput = {
    create?: XOR<Enumerable<ReportCreateWithoutFlagInput>, Enumerable<ReportUncheckedCreateWithoutFlagInput>>
    connectOrCreate?: Enumerable<ReportCreateOrConnectWithoutFlagInput>
    upsert?: Enumerable<ReportUpsertWithWhereUniqueWithoutFlagInput>
    createMany?: ReportCreateManyFlagInputEnvelope
    set?: Enumerable<ReportWhereUniqueInput>
    disconnect?: Enumerable<ReportWhereUniqueInput>
    delete?: Enumerable<ReportWhereUniqueInput>
    connect?: Enumerable<ReportWhereUniqueInput>
    update?: Enumerable<ReportUpdateWithWhereUniqueWithoutFlagInput>
    updateMany?: Enumerable<ReportUpdateManyWithWhereWithoutFlagInput>
    deleteMany?: Enumerable<ReportScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutReportsInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReporterReportsInput = {
    create?: XOR<UserCreateWithoutReporterReportsInput, UserUncheckedCreateWithoutReporterReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReporterReportsInput
    connect?: UserWhereUniqueInput
  }

  export type FlagCreateNestedOneWithoutReportsInput = {
    create?: XOR<FlagCreateWithoutReportsInput, FlagUncheckedCreateWithoutReportsInput>
    connectOrCreate?: FlagCreateOrConnectWithoutReportsInput
    connect?: FlagWhereUniqueInput
  }

  export type AppealCreateNestedOneWithoutReportInput = {
    create?: XOR<AppealCreateWithoutReportInput, AppealUncheckedCreateWithoutReportInput>
    connectOrCreate?: AppealCreateOrConnectWithoutReportInput
    connect?: AppealWhereUniqueInput
  }

  export type AppealUncheckedCreateNestedOneWithoutReportInput = {
    create?: XOR<AppealCreateWithoutReportInput, AppealUncheckedCreateWithoutReportInput>
    connectOrCreate?: AppealCreateOrConnectWithoutReportInput
    connect?: AppealWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReportsInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    upsert?: UserUpsertWithoutReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateOneRequiredWithoutReporterReportsInput = {
    create?: XOR<UserCreateWithoutReporterReportsInput, UserUncheckedCreateWithoutReporterReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReporterReportsInput
    upsert?: UserUpsertWithoutReporterReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReporterReportsInput, UserUncheckedUpdateWithoutReporterReportsInput>
  }

  export type FlagUpdateOneRequiredWithoutReportsInput = {
    create?: XOR<FlagCreateWithoutReportsInput, FlagUncheckedCreateWithoutReportsInput>
    connectOrCreate?: FlagCreateOrConnectWithoutReportsInput
    upsert?: FlagUpsertWithoutReportsInput
    connect?: FlagWhereUniqueInput
    update?: XOR<FlagUpdateWithoutReportsInput, FlagUncheckedUpdateWithoutReportsInput>
  }

  export type AppealUpdateOneWithoutReportInput = {
    create?: XOR<AppealCreateWithoutReportInput, AppealUncheckedCreateWithoutReportInput>
    connectOrCreate?: AppealCreateOrConnectWithoutReportInput
    upsert?: AppealUpsertWithoutReportInput
    disconnect?: boolean
    delete?: boolean
    connect?: AppealWhereUniqueInput
    update?: XOR<AppealUpdateWithoutReportInput, AppealUncheckedUpdateWithoutReportInput>
  }

  export type AppealUncheckedUpdateOneWithoutReportInput = {
    create?: XOR<AppealCreateWithoutReportInput, AppealUncheckedCreateWithoutReportInput>
    connectOrCreate?: AppealCreateOrConnectWithoutReportInput
    upsert?: AppealUpsertWithoutReportInput
    disconnect?: boolean
    delete?: boolean
    connect?: AppealWhereUniqueInput
    update?: XOR<AppealUpdateWithoutReportInput, AppealUncheckedUpdateWithoutReportInput>
  }

  export type UserCreateNestedOneWithoutResolverAppealsInput = {
    create?: XOR<UserCreateWithoutResolverAppealsInput, UserUncheckedCreateWithoutResolverAppealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResolverAppealsInput
    connect?: UserWhereUniqueInput
  }

  export type ReportCreateNestedOneWithoutAppealInput = {
    create?: XOR<ReportCreateWithoutAppealInput, ReportUncheckedCreateWithoutAppealInput>
    connectOrCreate?: ReportCreateOrConnectWithoutAppealInput
    connect?: ReportWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutResolverAppealsInput = {
    create?: XOR<UserCreateWithoutResolverAppealsInput, UserUncheckedCreateWithoutResolverAppealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResolverAppealsInput
    upsert?: UserUpsertWithoutResolverAppealsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutResolverAppealsInput, UserUncheckedUpdateWithoutResolverAppealsInput>
  }

  export type ReportUpdateOneRequiredWithoutAppealInput = {
    create?: XOR<ReportCreateWithoutAppealInput, ReportUncheckedCreateWithoutAppealInput>
    connectOrCreate?: ReportCreateOrConnectWithoutAppealInput
    upsert?: ReportUpsertWithoutAppealInput
    connect?: ReportWhereUniqueInput
    update?: XOR<ReportUpdateWithoutAppealInput, ReportUncheckedUpdateWithoutAppealInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    invalid: boolean
    device: string
    accessToken: string
    refreshToken: string
    token: string
    version: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    invalid: boolean
    device: string
    accessToken: string
    refreshToken: string
    token: string
    version: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutOwnerInput = {
    id: string
    name: string
    requestCount: number
    requestLimit: number
    requestLimitResetAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutOwnerInput = {
    id: string
    name: string
    requestCount: number
    requestLimit: number
    requestLimitResetAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ApplicationCreateOrConnectWithoutOwnerInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutOwnerInput, ApplicationUncheckedCreateWithoutOwnerInput>
  }

  export type ApplicationCreateManyOwnerInputEnvelope = {
    data: Enumerable<ApplicationCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutUserInput = {
    id: string
    name: string
    requestCount: number
    requestLimit: number
    requestLimitResetAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutUserInput = {
    id: string
    name: string
    requestCount: number
    requestLimit: number
    requestLimitResetAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type ApplicationCreateOrConnectWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateWithoutUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reporterUser: UserCreateNestedOneWithoutReporterReportsInput
    flag: FlagCreateNestedOneWithoutReportsInput
    appeal?: AppealCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutUserInput = {
    id: string
    reporterUserId: string
    flagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appeal?: AppealUncheckedCreateNestedOneWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateManyUserInputEnvelope = {
    data: Enumerable<ReportCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutReporterUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReportsInput
    flag: FlagCreateNestedOneWithoutReportsInput
    appeal?: AppealCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutReporterUserInput = {
    id: string
    userId: string
    flagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appeal?: AppealUncheckedCreateNestedOneWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutReporterUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutReporterUserInput, ReportUncheckedCreateWithoutReporterUserInput>
  }

  export type ReportCreateManyReporterUserInputEnvelope = {
    data: Enumerable<ReportCreateManyReporterUserInput>
    skipDuplicates?: boolean
  }

  export type AppealCreateWithoutResolverUserInput = {
    id: string
    reason: string
    isSuccessful: boolean
    resolvedReason?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    report: ReportCreateNestedOneWithoutAppealInput
  }

  export type AppealUncheckedCreateWithoutResolverUserInput = {
    id: string
    reason: string
    isSuccessful: boolean
    resolvedReason?: string | null
    resolvedAt?: Date | string | null
    reportId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppealCreateOrConnectWithoutResolverUserInput = {
    where: AppealWhereUniqueInput
    create: XOR<AppealCreateWithoutResolverUserInput, AppealUncheckedCreateWithoutResolverUserInput>
  }

  export type AppealCreateManyResolverUserInputEnvelope = {
    data: Enumerable<AppealCreateManyResolverUserInput>
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: StringFilter | string
    invalid?: BoolFilter | boolean
    device?: StringFilter | string
    accessToken?: StringFilter | string
    refreshToken?: StringFilter | string
    token?: StringFilter | string
    version?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    expiresAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutOwnerInput, ApplicationUncheckedUpdateWithoutOwnerInput>
    create: XOR<ApplicationCreateWithoutOwnerInput, ApplicationUncheckedCreateWithoutOwnerInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutOwnerInput, ApplicationUncheckedUpdateWithoutOwnerInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutOwnerInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutApplicationsInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: Enumerable<ApplicationScalarWhereInput>
    OR?: Enumerable<ApplicationScalarWhereInput>
    NOT?: Enumerable<ApplicationScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    requestCount?: IntFilter | number
    requestLimit?: IntFilter | number
    requestLimitResetAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ownerId?: StringFilter | string
    userId?: StringFilter | string
  }

  export type ApplicationUpsertWithoutUserInput = {
    update: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    requestLimit?: IntFieldUpdateOperationsInput | number
    requestLimitResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutApplicationsInput
  }

  export type ApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    requestLimit?: IntFieldUpdateOperationsInput | number
    requestLimitResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type ReportUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutReportsInput>
  }

  export type ReportScalarWhereInput = {
    AND?: Enumerable<ReportScalarWhereInput>
    OR?: Enumerable<ReportScalarWhereInput>
    NOT?: Enumerable<ReportScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    reporterUserId?: StringFilter | string
    flagId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutReporterUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutReporterUserInput, ReportUncheckedUpdateWithoutReporterUserInput>
    create: XOR<ReportCreateWithoutReporterUserInput, ReportUncheckedCreateWithoutReporterUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutReporterUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutReporterUserInput, ReportUncheckedUpdateWithoutReporterUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutReporterUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutReporterReportsInput>
  }

  export type AppealUpsertWithWhereUniqueWithoutResolverUserInput = {
    where: AppealWhereUniqueInput
    update: XOR<AppealUpdateWithoutResolverUserInput, AppealUncheckedUpdateWithoutResolverUserInput>
    create: XOR<AppealCreateWithoutResolverUserInput, AppealUncheckedCreateWithoutResolverUserInput>
  }

  export type AppealUpdateWithWhereUniqueWithoutResolverUserInput = {
    where: AppealWhereUniqueInput
    data: XOR<AppealUpdateWithoutResolverUserInput, AppealUncheckedUpdateWithoutResolverUserInput>
  }

  export type AppealUpdateManyWithWhereWithoutResolverUserInput = {
    where: AppealScalarWhereInput
    data: XOR<AppealUpdateManyMutationInput, AppealUncheckedUpdateManyWithoutResolverAppealsInput>
  }

  export type AppealScalarWhereInput = {
    AND?: Enumerable<AppealScalarWhereInput>
    OR?: Enumerable<AppealScalarWhereInput>
    NOT?: Enumerable<AppealScalarWhereInput>
    id?: StringFilter | string
    reason?: StringFilter | string
    isSuccessful?: BoolFilter | boolean
    resolvedReason?: StringNullableFilter | string | null
    resolvedAt?: DateTimeNullableFilter | Date | string | null
    resolverUserId?: StringFilter | string
    reportId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutOwnerInput
    application?: ApplicationCreateNestedOneWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reporterReports?: ReportCreateNestedManyWithoutReporterUserInput
    resolverAppeals?: AppealCreateNestedManyWithoutResolverUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutOwnerInput
    application?: ApplicationUncheckedCreateNestedOneWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reporterReports?: ReportUncheckedCreateNestedManyWithoutReporterUserInput
    resolverAppeals?: AppealUncheckedCreateNestedManyWithoutResolverUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutOwnerInput
    application?: ApplicationUpdateOneWithoutUserInput
    reports?: ReportUpdateManyWithoutUserInput
    reporterReports?: ReportUpdateManyWithoutReporterUserInput
    resolverAppeals?: AppealUpdateManyWithoutResolverUserInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutOwnerInput
    application?: ApplicationUncheckedUpdateOneWithoutUserInput
    reports?: ReportUncheckedUpdateManyWithoutUserInput
    reporterReports?: ReportUncheckedUpdateManyWithoutReporterUserInput
    resolverAppeals?: AppealUncheckedUpdateManyWithoutResolverUserInput
  }

  export type UserCreateWithoutApplicationsInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    application?: ApplicationCreateNestedOneWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reporterReports?: ReportCreateNestedManyWithoutReporterUserInput
    resolverAppeals?: AppealCreateNestedManyWithoutResolverUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    application?: ApplicationUncheckedCreateNestedOneWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reporterReports?: ReportUncheckedCreateNestedManyWithoutReporterUserInput
    resolverAppeals?: AppealUncheckedCreateNestedManyWithoutResolverUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutApplicationInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutOwnerInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reporterReports?: ReportCreateNestedManyWithoutReporterUserInput
    resolverAppeals?: AppealCreateNestedManyWithoutResolverUserInput
  }

  export type UserUncheckedCreateWithoutApplicationInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOwnerInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reporterReports?: ReportUncheckedCreateNestedManyWithoutReporterUserInput
    resolverAppeals?: AppealUncheckedCreateNestedManyWithoutResolverUserInput
  }

  export type UserCreateOrConnectWithoutApplicationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationInput, UserUncheckedCreateWithoutApplicationInput>
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserInput
    application?: ApplicationUpdateOneWithoutUserInput
    reports?: ReportUpdateManyWithoutUserInput
    reporterReports?: ReportUpdateManyWithoutReporterUserInput
    resolverAppeals?: AppealUpdateManyWithoutResolverUserInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    application?: ApplicationUncheckedUpdateOneWithoutUserInput
    reports?: ReportUncheckedUpdateManyWithoutUserInput
    reporterReports?: ReportUncheckedUpdateManyWithoutReporterUserInput
    resolverAppeals?: AppealUncheckedUpdateManyWithoutResolverUserInput
  }

  export type UserUpsertWithoutApplicationInput = {
    update: XOR<UserUpdateWithoutApplicationInput, UserUncheckedUpdateWithoutApplicationInput>
    create: XOR<UserCreateWithoutApplicationInput, UserUncheckedCreateWithoutApplicationInput>
  }

  export type UserUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserInput
    applications?: ApplicationUpdateManyWithoutOwnerInput
    reports?: ReportUpdateManyWithoutUserInput
    reporterReports?: ReportUpdateManyWithoutReporterUserInput
    resolverAppeals?: AppealUpdateManyWithoutResolverUserInput
  }

  export type UserUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    applications?: ApplicationUncheckedUpdateManyWithoutOwnerInput
    reports?: ReportUncheckedUpdateManyWithoutUserInput
    reporterReports?: ReportUncheckedUpdateManyWithoutReporterUserInput
    resolverAppeals?: AppealUncheckedUpdateManyWithoutResolverUserInput
  }

  export type ReportCreateWithoutFlagInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReportsInput
    reporterUser: UserCreateNestedOneWithoutReporterReportsInput
    appeal?: AppealCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutFlagInput = {
    id: string
    userId: string
    reporterUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appeal?: AppealUncheckedCreateNestedOneWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutFlagInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutFlagInput, ReportUncheckedCreateWithoutFlagInput>
  }

  export type ReportCreateManyFlagInputEnvelope = {
    data: Enumerable<ReportCreateManyFlagInput>
    skipDuplicates?: boolean
  }

  export type ReportUpsertWithWhereUniqueWithoutFlagInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutFlagInput, ReportUncheckedUpdateWithoutFlagInput>
    create: XOR<ReportCreateWithoutFlagInput, ReportUncheckedCreateWithoutFlagInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutFlagInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutFlagInput, ReportUncheckedUpdateWithoutFlagInput>
  }

  export type ReportUpdateManyWithWhereWithoutFlagInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutReportsInput>
  }

  export type UserCreateWithoutReportsInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutOwnerInput
    application?: ApplicationCreateNestedOneWithoutUserInput
    reporterReports?: ReportCreateNestedManyWithoutReporterUserInput
    resolverAppeals?: AppealCreateNestedManyWithoutResolverUserInput
  }

  export type UserUncheckedCreateWithoutReportsInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOwnerInput
    application?: ApplicationUncheckedCreateNestedOneWithoutUserInput
    reporterReports?: ReportUncheckedCreateNestedManyWithoutReporterUserInput
    resolverAppeals?: AppealUncheckedCreateNestedManyWithoutResolverUserInput
  }

  export type UserCreateOrConnectWithoutReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
  }

  export type UserCreateWithoutReporterReportsInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutOwnerInput
    application?: ApplicationCreateNestedOneWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    resolverAppeals?: AppealCreateNestedManyWithoutResolverUserInput
  }

  export type UserUncheckedCreateWithoutReporterReportsInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOwnerInput
    application?: ApplicationUncheckedCreateNestedOneWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    resolverAppeals?: AppealUncheckedCreateNestedManyWithoutResolverUserInput
  }

  export type UserCreateOrConnectWithoutReporterReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReporterReportsInput, UserUncheckedCreateWithoutReporterReportsInput>
  }

  export type FlagCreateWithoutReportsInput = {
    id: string
    name: string
    description: string
    color: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlagUncheckedCreateWithoutReportsInput = {
    id: string
    name: string
    description: string
    color: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlagCreateOrConnectWithoutReportsInput = {
    where: FlagWhereUniqueInput
    create: XOR<FlagCreateWithoutReportsInput, FlagUncheckedCreateWithoutReportsInput>
  }

  export type AppealCreateWithoutReportInput = {
    id: string
    reason: string
    isSuccessful: boolean
    resolvedReason?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolverUser: UserCreateNestedOneWithoutResolverAppealsInput
  }

  export type AppealUncheckedCreateWithoutReportInput = {
    id: string
    reason: string
    isSuccessful: boolean
    resolvedReason?: string | null
    resolvedAt?: Date | string | null
    resolverUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppealCreateOrConnectWithoutReportInput = {
    where: AppealWhereUniqueInput
    create: XOR<AppealCreateWithoutReportInput, AppealUncheckedCreateWithoutReportInput>
  }

  export type UserUpsertWithoutReportsInput = {
    update: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
  }

  export type UserUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserInput
    applications?: ApplicationUpdateManyWithoutOwnerInput
    application?: ApplicationUpdateOneWithoutUserInput
    reporterReports?: ReportUpdateManyWithoutReporterUserInput
    resolverAppeals?: AppealUpdateManyWithoutResolverUserInput
  }

  export type UserUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    applications?: ApplicationUncheckedUpdateManyWithoutOwnerInput
    application?: ApplicationUncheckedUpdateOneWithoutUserInput
    reporterReports?: ReportUncheckedUpdateManyWithoutReporterUserInput
    resolverAppeals?: AppealUncheckedUpdateManyWithoutResolverUserInput
  }

  export type UserUpsertWithoutReporterReportsInput = {
    update: XOR<UserUpdateWithoutReporterReportsInput, UserUncheckedUpdateWithoutReporterReportsInput>
    create: XOR<UserCreateWithoutReporterReportsInput, UserUncheckedCreateWithoutReporterReportsInput>
  }

  export type UserUpdateWithoutReporterReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserInput
    applications?: ApplicationUpdateManyWithoutOwnerInput
    application?: ApplicationUpdateOneWithoutUserInput
    reports?: ReportUpdateManyWithoutUserInput
    resolverAppeals?: AppealUpdateManyWithoutResolverUserInput
  }

  export type UserUncheckedUpdateWithoutReporterReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    applications?: ApplicationUncheckedUpdateManyWithoutOwnerInput
    application?: ApplicationUncheckedUpdateOneWithoutUserInput
    reports?: ReportUncheckedUpdateManyWithoutUserInput
    resolverAppeals?: AppealUncheckedUpdateManyWithoutResolverUserInput
  }

  export type FlagUpsertWithoutReportsInput = {
    update: XOR<FlagUpdateWithoutReportsInput, FlagUncheckedUpdateWithoutReportsInput>
    create: XOR<FlagCreateWithoutReportsInput, FlagUncheckedCreateWithoutReportsInput>
  }

  export type FlagUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppealUpsertWithoutReportInput = {
    update: XOR<AppealUpdateWithoutReportInput, AppealUncheckedUpdateWithoutReportInput>
    create: XOR<AppealCreateWithoutReportInput, AppealUncheckedCreateWithoutReportInput>
  }

  export type AppealUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    resolvedReason?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolverUser?: UserUpdateOneRequiredWithoutResolverAppealsInput
  }

  export type AppealUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    resolvedReason?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolverUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutResolverAppealsInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutOwnerInput
    application?: ApplicationCreateNestedOneWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reporterReports?: ReportCreateNestedManyWithoutReporterUserInput
  }

  export type UserUncheckedCreateWithoutResolverAppealsInput = {
    id: string
    username: string
    discriminator: string
    avatar?: string | null
    sitePermissions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOwnerInput
    application?: ApplicationUncheckedCreateNestedOneWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reporterReports?: ReportUncheckedCreateNestedManyWithoutReporterUserInput
  }

  export type UserCreateOrConnectWithoutResolverAppealsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResolverAppealsInput, UserUncheckedCreateWithoutResolverAppealsInput>
  }

  export type ReportCreateWithoutAppealInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReportsInput
    reporterUser: UserCreateNestedOneWithoutReporterReportsInput
    flag: FlagCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutAppealInput = {
    id: string
    userId: string
    reporterUserId: string
    flagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutAppealInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutAppealInput, ReportUncheckedCreateWithoutAppealInput>
  }

  export type UserUpsertWithoutResolverAppealsInput = {
    update: XOR<UserUpdateWithoutResolverAppealsInput, UserUncheckedUpdateWithoutResolverAppealsInput>
    create: XOR<UserCreateWithoutResolverAppealsInput, UserUncheckedCreateWithoutResolverAppealsInput>
  }

  export type UserUpdateWithoutResolverAppealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserInput
    applications?: ApplicationUpdateManyWithoutOwnerInput
    application?: ApplicationUpdateOneWithoutUserInput
    reports?: ReportUpdateManyWithoutUserInput
    reporterReports?: ReportUpdateManyWithoutReporterUserInput
  }

  export type UserUncheckedUpdateWithoutResolverAppealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discriminator?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sitePermissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    applications?: ApplicationUncheckedUpdateManyWithoutOwnerInput
    application?: ApplicationUncheckedUpdateOneWithoutUserInput
    reports?: ReportUncheckedUpdateManyWithoutUserInput
    reporterReports?: ReportUncheckedUpdateManyWithoutReporterUserInput
  }

  export type ReportUpsertWithoutAppealInput = {
    update: XOR<ReportUpdateWithoutAppealInput, ReportUncheckedUpdateWithoutAppealInput>
    create: XOR<ReportCreateWithoutAppealInput, ReportUncheckedCreateWithoutAppealInput>
  }

  export type ReportUpdateWithoutAppealInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportsInput
    reporterUser?: UserUpdateOneRequiredWithoutReporterReportsInput
    flag?: FlagUpdateOneRequiredWithoutReportsInput
  }

  export type ReportUncheckedUpdateWithoutAppealInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reporterUserId?: StringFieldUpdateOperationsInput | string
    flagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    invalid: boolean
    device: string
    accessToken: string
    refreshToken: string
    token: string
    version: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ApplicationCreateManyOwnerInput = {
    id: string
    name: string
    requestCount: number
    requestLimit: number
    requestLimitResetAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ReportCreateManyUserInput = {
    id: string
    reporterUserId: string
    flagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateManyReporterUserInput = {
    id: string
    userId: string
    flagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppealCreateManyResolverUserInput = {
    id: string
    reason: string
    isSuccessful: boolean
    resolvedReason?: string | null
    resolvedAt?: Date | string | null
    reportId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    invalid?: BoolFieldUpdateOperationsInput | boolean
    device?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    invalid?: BoolFieldUpdateOperationsInput | boolean
    device?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invalid?: BoolFieldUpdateOperationsInput | boolean
    device?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    requestLimit?: IntFieldUpdateOperationsInput | number
    requestLimitResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationInput
  }

  export type ApplicationUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    requestLimit?: IntFieldUpdateOperationsInput | number
    requestLimitResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    requestLimit?: IntFieldUpdateOperationsInput | number
    requestLimitResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporterUser?: UserUpdateOneRequiredWithoutReporterReportsInput
    flag?: FlagUpdateOneRequiredWithoutReportsInput
    appeal?: AppealUpdateOneWithoutReportInput
  }

  export type ReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterUserId?: StringFieldUpdateOperationsInput | string
    flagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appeal?: AppealUncheckedUpdateOneWithoutReportInput
  }

  export type ReportUncheckedUpdateManyWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterUserId?: StringFieldUpdateOperationsInput | string
    flagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutReporterUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportsInput
    flag?: FlagUpdateOneRequiredWithoutReportsInput
    appeal?: AppealUpdateOneWithoutReportInput
  }

  export type ReportUncheckedUpdateWithoutReporterUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appeal?: AppealUncheckedUpdateOneWithoutReportInput
  }

  export type ReportUncheckedUpdateManyWithoutReporterReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppealUpdateWithoutResolverUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    resolvedReason?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneRequiredWithoutAppealInput
  }

  export type AppealUncheckedUpdateWithoutResolverUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    resolvedReason?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppealUncheckedUpdateManyWithoutResolverAppealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    resolvedReason?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyFlagInput = {
    id: string
    userId: string
    reporterUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateWithoutFlagInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportsInput
    reporterUser?: UserUpdateOneRequiredWithoutReporterReportsInput
    appeal?: AppealUpdateOneWithoutReportInput
  }

  export type ReportUncheckedUpdateWithoutFlagInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reporterUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appeal?: AppealUncheckedUpdateOneWithoutReportInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}