import { Injectable } from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilities: Facility[] = [
    {
      id: 1,
      name: 'Villa Beach Front',
      area: 1000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'Villa',
    },
    {
      id: 2,
      name: 'House Princess',
      area: 1000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'tháng',
      facilityType: 'House',
    },
    {
      id: 3,
      name: 'Room Princess',
      area: 1000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'room',
    },
    {
      id: 4,
      name: 'Villa Princess',
      area: 1000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'Villa',
    },
    {
      id: 5,
      name: 'Villa Beach Front',
      area: 1000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'Villa',
    },
    {
      id: 6,
      name: 'House Princess',
      area: 1000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'tháng',
      facilityType: 'House',
    },
    {
      id: 7,
      name: 'Room Princess',
      area: 1000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'room',
    },
    {
      id: 8,
      name: 'Villa Princess',
      area: 1000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'Villa',
    },
  ];
  constructor() { }

  getAll(): Facility[] {
    return this.facilities;
  }
}
