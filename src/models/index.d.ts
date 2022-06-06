import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ServicemanMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Serviceman {
  readonly id: string;
  readonly name?: string | null;
  readonly servicename?: string | null;
  readonly govtid?: string | null;
  readonly phnumber?: number | null;
  readonly email?: string | null;
  readonly verification?: string | null;
  readonly photo?: string | null;
  readonly rating?: number | null;
  readonly ratingusers?: string | null;
  readonly ratingcomments?: string | null;
  readonly gender?: string | null;
  readonly dob?: string | null;
  readonly bio?: string | null;
  readonly vehicle?: string | null;
  readonly residence?: string | null;
  readonly address?: string | null;
  readonly pincode?: number | null;
  readonly mainproficiency?: string | null;
  readonly proficiencyskills?: string | null;
  readonly reportfactor?: string | null;
  readonly reportcomments?: string | null;
  readonly archivedservices?: string | null;
  readonly totalservices?: number | null;
  readonly currentactiveservice?: string | null;
  readonly funds?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Serviceman, ServicemanMetaData>);
  static copyOf(source: Serviceman, mutator: (draft: MutableModel<Serviceman, ServicemanMetaData>) => MutableModel<Serviceman, ServicemanMetaData> | void): Serviceman;
}