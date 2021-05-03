type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type RotiRelateToManyInput = {
  readonly create?: ReadonlyArray<RotiCreateInput | null> | null;
  readonly connect?: ReadonlyArray<RotiWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<RotiWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly firstname?: Scalars['String'] | null;
  readonly firstname_not?: Scalars['String'] | null;
  readonly firstname_contains?: Scalars['String'] | null;
  readonly firstname_not_contains?: Scalars['String'] | null;
  readonly firstname_starts_with?: Scalars['String'] | null;
  readonly firstname_not_starts_with?: Scalars['String'] | null;
  readonly firstname_ends_with?: Scalars['String'] | null;
  readonly firstname_not_ends_with?: Scalars['String'] | null;
  readonly firstname_i?: Scalars['String'] | null;
  readonly firstname_not_i?: Scalars['String'] | null;
  readonly firstname_contains_i?: Scalars['String'] | null;
  readonly firstname_not_contains_i?: Scalars['String'] | null;
  readonly firstname_starts_with_i?: Scalars['String'] | null;
  readonly firstname_not_starts_with_i?: Scalars['String'] | null;
  readonly firstname_ends_with_i?: Scalars['String'] | null;
  readonly firstname_not_ends_with_i?: Scalars['String'] | null;
  readonly firstname_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly firstname_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly phone?: Scalars['String'] | null;
  readonly phone_not?: Scalars['String'] | null;
  readonly phone_contains?: Scalars['String'] | null;
  readonly phone_not_contains?: Scalars['String'] | null;
  readonly phone_starts_with?: Scalars['String'] | null;
  readonly phone_not_starts_with?: Scalars['String'] | null;
  readonly phone_ends_with?: Scalars['String'] | null;
  readonly phone_not_ends_with?: Scalars['String'] | null;
  readonly phone_i?: Scalars['String'] | null;
  readonly phone_not_i?: Scalars['String'] | null;
  readonly phone_contains_i?: Scalars['String'] | null;
  readonly phone_not_contains_i?: Scalars['String'] | null;
  readonly phone_starts_with_i?: Scalars['String'] | null;
  readonly phone_not_starts_with_i?: Scalars['String'] | null;
  readonly phone_ends_with_i?: Scalars['String'] | null;
  readonly phone_not_ends_with_i?: Scalars['String'] | null;
  readonly phone_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly phone_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly rotis_every?: RotiWhereInput | null;
  readonly rotis_some?: RotiWhereInput | null;
  readonly rotis_none?: RotiWhereInput | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'firstname_ASC'
  | 'firstname_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'phone_ASC'
  | 'phone_DESC'
  | 'rotis_ASC'
  | 'rotis_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly firstname?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly phone?: Scalars['String'] | null;
  readonly rotis?: RotiRelateToManyInput | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly firstname?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly phone?: Scalars['String'] | null;
  readonly rotis?: RotiRelateToManyInput | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type VoteRelateToManyInput = {
  readonly create?: ReadonlyArray<VoteCreateInput | null> | null;
  readonly connect?: ReadonlyArray<VoteWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<VoteWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RotiWhereInput = {
  readonly AND?: ReadonlyArray<RotiWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RotiWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly datecreated?: Scalars['String'] | null;
  readonly datecreated_not?: Scalars['String'] | null;
  readonly datecreated_lt?: Scalars['String'] | null;
  readonly datecreated_lte?: Scalars['String'] | null;
  readonly datecreated_gt?: Scalars['String'] | null;
  readonly datecreated_gte?: Scalars['String'] | null;
  readonly datecreated_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly datecreated_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly votes_every?: VoteWhereInput | null;
  readonly votes_some?: VoteWhereInput | null;
  readonly votes_none?: VoteWhereInput | null;
  readonly updatedAt?: Scalars['String'] | null;
  readonly updatedAt_not?: Scalars['String'] | null;
  readonly updatedAt_lt?: Scalars['String'] | null;
  readonly updatedAt_lte?: Scalars['String'] | null;
  readonly updatedAt_gt?: Scalars['String'] | null;
  readonly updatedAt_gte?: Scalars['String'] | null;
  readonly updatedAt_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly updatedAt_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly createdAt?: Scalars['String'] | null;
  readonly createdAt_not?: Scalars['String'] | null;
  readonly createdAt_lt?: Scalars['String'] | null;
  readonly createdAt_lte?: Scalars['String'] | null;
  readonly createdAt_gt?: Scalars['String'] | null;
  readonly createdAt_gte?: Scalars['String'] | null;
  readonly createdAt_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly createdAt_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type RotiWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRotisBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'datecreated_ASC'
  | 'datecreated_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'votes_ASC'
  | 'votes_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type RotiUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly datecreated?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly votes?: VoteRelateToManyInput | null;
};

export type RotisUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RotiUpdateInput | null;
};

export type RotiCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly datecreated?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly votes?: VoteRelateToManyInput | null;
};

export type RotisCreateInput = {
  readonly data?: RotiCreateInput | null;
};

export type VoteWhereInput = {
  readonly AND?: ReadonlyArray<VoteWhereInput | null> | null;
  readonly OR?: ReadonlyArray<VoteWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly note?: Scalars['String'] | null;
  readonly note_not?: Scalars['String'] | null;
  readonly note_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly note_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly mood?: Scalars['String'] | null;
  readonly mood_not?: Scalars['String'] | null;
  readonly mood_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly mood_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly comment?: Scalars['String'] | null;
  readonly comment_not?: Scalars['String'] | null;
  readonly comment_contains?: Scalars['String'] | null;
  readonly comment_not_contains?: Scalars['String'] | null;
  readonly comment_starts_with?: Scalars['String'] | null;
  readonly comment_not_starts_with?: Scalars['String'] | null;
  readonly comment_ends_with?: Scalars['String'] | null;
  readonly comment_not_ends_with?: Scalars['String'] | null;
  readonly comment_i?: Scalars['String'] | null;
  readonly comment_not_i?: Scalars['String'] | null;
  readonly comment_contains_i?: Scalars['String'] | null;
  readonly comment_not_contains_i?: Scalars['String'] | null;
  readonly comment_starts_with_i?: Scalars['String'] | null;
  readonly comment_not_starts_with_i?: Scalars['String'] | null;
  readonly comment_ends_with_i?: Scalars['String'] | null;
  readonly comment_not_ends_with_i?: Scalars['String'] | null;
  readonly comment_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly comment_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly rotis_every?: RotiWhereInput | null;
  readonly rotis_some?: RotiWhereInput | null;
  readonly rotis_none?: RotiWhereInput | null;
  readonly updatedAt?: Scalars['String'] | null;
  readonly updatedAt_not?: Scalars['String'] | null;
  readonly updatedAt_lt?: Scalars['String'] | null;
  readonly updatedAt_lte?: Scalars['String'] | null;
  readonly updatedAt_gt?: Scalars['String'] | null;
  readonly updatedAt_gte?: Scalars['String'] | null;
  readonly updatedAt_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly updatedAt_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly createdAt?: Scalars['String'] | null;
  readonly createdAt_not?: Scalars['String'] | null;
  readonly createdAt_lt?: Scalars['String'] | null;
  readonly createdAt_lte?: Scalars['String'] | null;
  readonly createdAt_gt?: Scalars['String'] | null;
  readonly createdAt_gte?: Scalars['String'] | null;
  readonly createdAt_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly createdAt_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type VoteWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortVotesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'note_ASC'
  | 'note_DESC'
  | 'mood_ASC'
  | 'mood_DESC'
  | 'comment_ASC'
  | 'comment_DESC'
  | 'rotis_ASC'
  | 'rotis_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type VoteUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly note?: Scalars['String'] | null;
  readonly mood?: Scalars['String'] | null;
  readonly comment?: Scalars['String'] | null;
  readonly rotis?: RotiRelateToManyInput | null;
};

export type VotesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: VoteUpdateInput | null;
};

export type VoteCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly note?: Scalars['String'] | null;
  readonly mood?: Scalars['String'] | null;
  readonly comment?: Scalars['String'] | null;
  readonly rotis?: RotiRelateToManyInput | null;
};

export type VotesCreateInput = {
  readonly data?: VoteCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'firstname'
    | 'email'
    | 'password'
    | 'phone'
    | 'rotis';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly firstname?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly phone?: string | null;
    readonly rotis?: string | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type RotiListTypeInfo = {
  key: 'Roti';
  fields:
    | 'id'
    | 'name'
    | 'description'
    | 'datecreated'
    | 'status'
    | 'user'
    | 'votes'
    | 'updatedAt'
    | 'createdAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly datecreated?: Date | null;
    readonly status?: string | null;
    readonly user?: string | null;
    readonly votes?: string | null;
    readonly updatedAt?: Date | null;
    readonly createdAt?: Date | null;
  };
  inputs: {
    where: RotiWhereInput;
    create: RotiCreateInput;
    update: RotiUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RotiWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRotisBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RotiListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RotiListTypeInfo,
    RotiListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RotiListTypeInfo,
  RotiListTypeInfo['fields']
>;

export type VoteListTypeInfo = {
  key: 'Vote';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'note'
    | 'mood'
    | 'comment'
    | 'rotis'
    | 'updatedAt'
    | 'createdAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly note?: string | null;
    readonly mood?: string | null;
    readonly comment?: string | null;
    readonly rotis?: string | null;
    readonly updatedAt?: Date | null;
    readonly createdAt?: Date | null;
  };
  inputs: {
    where: VoteWhereInput;
    create: VoteCreateInput;
    update: VoteUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: VoteWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortVotesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type VoteListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    VoteListTypeInfo,
    VoteListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  VoteListTypeInfo,
  VoteListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Roti: RotiListTypeInfo;
  readonly Vote: VoteListTypeInfo;
};
