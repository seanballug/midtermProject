import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private suppliers: Supplier[] = [

    {
      id: 1,
      supplierName: 'ASUS Global Distribution',
      location: 'Taipei, Taiwan',
      email: 'sales@asusglobal.com',
      contactPerson: 'Chen Wei',
      phone: '+886-02-28943447',
      productsSupplied: ['Laptops','Motherboards','Graphics Cards'],
      rating: 4.7,
      partnershipSince: 2019
    },

    {
      id: 2,
      supplierName: 'Logitech Distribution',
      location: 'California, USA',
      email: 'contact@logitechdist.com',
      contactPerson: 'Michael Adams',
      phone: '+1-408-555-8822',
      productsSupplied: ['Mouse','Keyboard','Webcams'],
      rating: 4.6,
      partnershipSince: 2018
    },

    {
      id: 3,
      supplierName: 'Razer Supply Chain',
      location: 'Singapore',
      email: 'supply@razer.com',
      contactPerson: 'Daniel Tan',
      phone: '+65-6784-2234',
      productsSupplied: ['Gaming Keyboards','Gaming Mice','Headsets'],
      rating: 4.5,
      partnershipSince: 2020
    },

    {
      id: 4,
      supplierName: 'Samsung Electronics Supply',
      location: 'Seoul, South Korea',
      email: 'partners@samsung.com',
      contactPerson: 'Kim Min-Jae',
      phone: '+82-2-2255-0114',
      productsSupplied: ['Smartphones','Displays','Storage'],
      rating: 4.8,
      partnershipSince: 2017
    },

    {
      id: 5,
      supplierName: 'LG Display Solutions',
      location: 'Busan, South Korea',
      email: 'display@lg.com',
      contactPerson: 'Park Ji-Hoon',
      phone: '+82-51-234-1122',
      productsSupplied: ['Gaming Monitors','OLED Displays'],
      rating: 4.6,
      partnershipSince: 2019
    },

    {
      id: 6,
      supplierName: 'SanDisk Storage Systems',
      location: 'California, USA',
      email: 'support@sandisk.com',
      contactPerson: 'Sarah Collins',
      phone: '+1-415-788-6600',
      productsSupplied: ['SSD','USB Drives','Memory Cards'],
      rating: 4.7,
      partnershipSince: 2021
    },

    {
      id: 7,
      supplierName: 'JBL Audio Technologies',
      location: 'Connecticut, USA',
      email: 'audio@jbl.com',
      contactPerson: 'Robert Hayes',
      phone: '+1-203-870-5000',
      productsSupplied: ['Bluetooth Speakers','Headphones'],
      rating: 4.4,
      partnershipSince: 2020
    },

    {
      id: 8,
      supplierName: 'Anker Innovations',
      location: 'Shenzhen, China',
      email: 'info@anker.com',
      contactPerson: 'Li Zhang',
      phone: '+86-755-2660-1234',
      productsSupplied: ['USB Hubs','Chargers','Power Banks'],
      rating: 4.5,
      partnershipSince: 2022
    },

    {
      id: 9,
      supplierName: 'SecretLab Furniture',
      location: 'Singapore',
      email: 'partners@secretlab.co',
      contactPerson: 'Marcus Lim',
      phone: '+65-6258-8888',
      productsSupplied: ['Gaming Chairs','Office Chairs'],
      rating: 4.6,
      partnershipSince: 2021
    },

    {
      id: 10,
      supplierName: 'TechSource Electronics',
      location: 'Shenzhen, China',
      email: 'sales@techsource.com',
      contactPerson: 'Wang Yu',
      phone: '+86-755-9911-2222',
      productsSupplied: ['PC Components','Cooling Systems'],
      rating: 4.3,
      partnershipSince: 2020
    }

  ];

  constructor() {}

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {

    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);

    if (index !== -1) {
      this.suppliers[index] = { ...updatedSupplier };
    }

  }

}