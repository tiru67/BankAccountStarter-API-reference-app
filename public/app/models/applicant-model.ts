/**
Copyright 2016 Capital One Services, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

import { AddressModel } from './address-model';

export class ApplicantModel {
  applicantRole: string;
  firstName: string;
  lastName: string;
  taxIdType: string;
  taxId: string;
  dateOfBirth: string;
  primaryPhoneNumber: string;
  emailAddress: string;
  homeAddress: AddressModel;
  middleName: string;
  jobTitle: string;
  employmentStatus: string;
  annualIncome: string;

  constructor(){
    this.homeAddress = new AddressModel();
    this.taxIdType = "SSN";
    this.applicantRole = "primary";
  }
}
