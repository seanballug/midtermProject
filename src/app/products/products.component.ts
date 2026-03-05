import { Component } from '@angular/core';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  showModal = false;

  selectedProduct: Product | null = null;

  products: Product[] = [

    {
      id:1,
      name:'Asus ROG Strix G16 G614JU-N4450W ',
      category:'Electronics',
      price:87999,
      stock:12,
      status:'Available',
      description:'a high-performance 16-inch gaming laptop powered by a 13th Gen Intel Core i7-13650HX processor and NVIDIA GeForce RTX 4050 GPU (140W max TGP)',
      brand:'ASUS',
      supplier:'BaguioNewTech',
      rating:4.5
    },

    {
      id:2,
      name:'G502 X LIGHTSPEED',
      category:'Accessories',
      price:5695,
      stock:30,
      status:'Available',
      description:'a premium, redesigned wireless gaming mouse featuring LIGHTFORCE hybrid optical-mechanical switches for high-speed, reliable clicking.',
      brand:'Logitech',
      supplier:'TechHobbit',
      rating:4.2
    },

    {
      id:3,
      name:'Razer Huntsman V3 Pro Tenkeyless',
      category:'Accessories',
      price:3500,
      stock:5,
      status:'Limited',
      description:'a new standard of speed with the Razer Huntsman V3 Pro Tenkeyless. Supercharged by Razer™ Snap Tap and Rapid Trigger Mode, execute more responsive inputs at unfair speeds. Customize further with adjustable actuation to optimize your competitive advantage.',
      brand:'Razer',
      supplier:'PCBlyat',
      rating:4.6
    },

    {
      id:4,
      name:'Samsung Galaxy S26',
      category:'Electronics',
      price:89000,
      stock:0,
      status:'Out of Stock',
      description:' Samsung Galaxy S26 features a 6.3-inch 1080x2340 display, a 50MP main camera, and is powered by the Snapdragon 8 Elite Gen 5 (or Exynos 2600) with 12GB RAM,',
      brand:'Samsung',
      supplier:'Phoneyeta',
      rating:4.8
    },

    {
      id:5,
      name:'Bluetooth Speaker',
      category:'Audio',
      price:2500,
      stock:18,
      status:'Available',
      description:'Portable bluetooth speaker',
      brand:'JBL',
      supplier:'AudioTech',
      rating:4.3
    },

    {
      id:6,
      name:'39 Inch UltraGear™ OLED WQHD 240Hz 0.03ms G-Sync Compatible 800R Curved Gaming Monitor',
      category:'Electronics',
      price:12000,
      stock:6,
      status:'Limited',
      description:'The LG UltraGear 39-inch OLED WQHD (39GS95QE-B/39GX90SA-W) is a premium curved gaming monitor (800R) featuring a 3440 x 1440 resolution, 240Hz refresh rate, and 0.03ms (GtG) response time. It offers immense immersion, vibrant, deep blacks, and tear-free gaming, perfect for fast-paced, high-end, wide-view gaming. ',
      brand:'LG',
      supplier:'Moneytors',
      rating:4.4
    },

    {
      id:7,
      name:'Sandisk Extreme M.2 NVME PCIE GEN 4.0 Internal SSD 500GB,',
      category:'Storage',
      price:8999,
      stock:10,
      status:'Available',
      description:'The SanDisk Extreme M.2 NVMe PCIe Gen 4.0 Internal SSD (500GB, Model: SDSSDX3N-500G-G26) is a high-performance storage drive designed for demanding creative workflows and gaming, offering sequential read speeds up to 5,000MB/s and write speeds up to 4,000MB/s. It utilizes the M.2 2280 form factor and PCIe Gen4 interface to significantly reduce system',
      brand:'SanDisk',
      supplier:'StorageNaMahal',
      rating:4.7
    },

    {
      id:8,
      name:'Logitech C270 HD Webcam',
      category:'Accessories',
      price:999,
      stock:25,
      status:'Available',
      description:'The Logitech C270 HD Webcam is a budget-friendly 720p/30fps USB-A camera designed for simple, clear video calls and recordings.',
      brand:'Logitech',
      supplier:'CamHereBaby',
      rating:4.1
    },

    {
      id:9,
      name:'TTRacing Swift X Pro Gaming Chair - Geto Edition',
      category:'Furniture',
      price:18000,
      stock:4,
      status:'Limited',
      description:'Embrace the power of Curse Manipulation with the 𝗧𝗧𝗥𝗮𝗰𝗶𝗻𝗴 𝗦𝘄𝗶𝗳𝘁 𝗫 𝗣𝗿𝗼 𝗚𝗮𝗺𝗶𝗻𝗴 𝗖𝗵𝗮𝗶𝗿 - 𝗚𝗲𝘁𝗼 𝗘𝗱𝗶𝘁𝗶𝗼𝗻. Inspired by the mighty Rainbow Dragon, Koryu, this chair channels Suguru Geto’s commanding presence. With its ergonomic design, sleek finish, and sturdy nylon wheel base, it’s built to provide the ultimate stability and comfort as you dominate every challenge.',
      brand:'SecretLab',
      supplier:'FurniTech',
      rating:4.6
    },

    {
      id:10,
      name:'Anker USB Hub x11',
      category:'Accessories',
      price:900,
      stock:20,
      status:'Available',
      description:'4 port USB hub with high speeds',
      brand:'Anker',
      supplier:'GadgetHub',
      rating:4.0
    }

  ];

  viewProductDetails(product: Product){

    this.selectedProduct = product;
    this.showModal = true;

  }

  closeModal(){

    this.showModal = false;

  }

}