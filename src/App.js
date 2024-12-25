import './App.css';
import logo from './assets/img/logo-inarcons.png'
import Alert from '@mui/material/Alert';
import { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import * as React from 'react';

function App() {
  const [areYouA, setAreYouA] = useState('professional')
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState()
  const [brand, setBrand] = useState()
  const [whatsapp, setWhatsapp] = useState()
  const [domicile, setDomicile] = useState()
  const [profession, setProfression] = useState()
  const [interested, setInterested] = useState('Yes')
  const [typeOfVendor,setTypeOfVendor] = useState('')
  const [message, setMessage] = useState()
  const [severity, setseverity] = useState()
  const [open, setOpen] = useState(false);
  const [desiredfeature, setDesiredfeature] = useState([])

  const handleClose = ( event, reason) => {
    if (reason === 'clickaway') {return;}
    setOpen(false);
  };

  const addDesired = (id) => {    
    const tempDesired =[]    
    if (desiredfeature.length > 0) {
      for (let i = 0; i < desiredfeature.length; i++) {
        tempDesired.push(desiredfeature[i]);                    
      } 
      tempDesired.push(id)
      setDesiredfeature(tempDesired)
    } else {
      setDesiredfeature([id])
    }
  }

  const removeDesired = (id) => {    
    let tempDesired = ''    
    if (desiredfeature.length > 0) {
      tempDesired = desiredfeature.filter((val)=> {
        return id !== val
      })
      setDesiredfeature(tempDesired)
    } else {
      setDesiredfeature([])
    }
  }

  useEffect(()=>{
    console.log('desired', desiredfeature)
  }, [desiredfeature])

  useEffect(() => {    
    let tempDesired = ''    
    if (areYouA === 'professional') {
      if (desiredfeature.length > 0) {
        tempDesired = desiredfeature.filter((val)=> {
          return val > 14
        })
        setDesiredfeature(tempDesired)
      }
    } else {
      if (desiredfeature.length > 0) {
        tempDesired = desiredfeature.filter((val)=> {
          return val < 15
        })
        setDesiredfeature(tempDesired)
      }
    }
  },[areYouA])

  return (
    <>
    <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center">
        <a href="#"><img src={logo} alt="Logo" className="h-14 p-2" /></a>
        <div className="ml-auto">
          
        </div>
        </div>
    </header>
    <div className=" min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg mt-10 mb-10 p-8 w-full  max-w-6xl">
            <h1 className="text-2xl font-medium mb-4">Welcome to Inarcons</h1>
            <p className="text-gray-600 mb-6 text-sm ">One stop shop for your building materials, professionals, and networks</p>

            <form action="#" method="POST" className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div className='flex space-x-4 items-start'>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Are You a</label>
                    <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="areYouA" value="professional" className="text-blue-600 focus:ring-blue-500"
                              checked={areYouA === 'professional' ? true : false}
                              onChange={()=>{setAreYouA('professional')}}
                            />
                            <span>Professional</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="areYouA" value="brands" className="text-blue-600 focus:ring-blue-500" 
                              checked={areYouA === 'brands' ? true : false}
                              onChange={()=>{setAreYouA('brands')}}
                            />
                            <span>Brands</span>
                        </label>
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                </div>
              </div>
              
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name <span className="font-normal">(as per NPWP)</span></label>
                        <input type="text" id="companyName" name="companyName" className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}}
                        />
                    </div>
                    <div>
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand <span className="font-normal">(insert comma if multiple)</span></label>
                        <textarea type="text" id="brand" name="brand" className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                          value={brand} onChange={(e)=>{setBrand(e.target.value)}}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                        <input type="tel" id="whatsapp" name="whatsapp" className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                          value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                        <input type="email" id="email" name="email" className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    <div>
                        <label htmlFor="domicile" className="block text-sm font-medium text-gray-700" >Domicile</label>
                        <select id="domicile"  name="domicile" className="p-2 mt-1 w-full border-gray-300 rounded-md shadow-sm text-sm "
                          onChange={(e)=>{ setDomicile(e.target.value) }}
                          value={domicile}
                          defaultValue={''}
                        >
                        <option value="" disabled>Select Provinces</option>
                        <option value="Aceh">Aceh</option>
                        <option value="Sumatera Utara">Sumatera Utara</option>
                        <option value="Sumatera Barat">Sumatera Barat</option>
                        <option value="Riau">Riau</option>
                        <option value="Kepulauan Riau">Kepulauan Riau</option>
                        <option value="Jambi">Jambi</option>
                        <option value="Sumatera Selatan">Sumatera Selatan</option>
                        <option value="Bengkulu">Bengkulu</option>
                        <option value="Lampung">Lampung</option>
                        <option value="Kepulauan Bangka Belitung">Kepulauan Bangka Belitung</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Jawa Barat">Jawa Barat</option>
                        <option value="Jawa Tengah">Jawa Tengah</option>
                        <option value="Yogyakarta">DI Yogyakarta</option>
                        <option value="Jawa Timur">Jawa Timur</option>
                        <option value="Banten">Banten</option>
                        <option value="Bali">Bali</option>
                        <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                        <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                        <option value="Kalimantan Barat">Kalimantan Barat</option>
                        <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                        <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                        <option value="Kalimantan Timur">Kalimantan Timur</option>
                        <option value="Kalimantan Utara">Kalimantan Utara</option>
                        <option value="Sulawesi Utara">Sulawesi Utara</option>
                        <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                        <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                        <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                        <option value="Sulawesi Barat">Sulawesi Barat</option>
                        <option value="Gorontalo">Gorontalo</option>
                        <option value="Maluku">Maluku</option>
                        <option value="Maluku Utara">Maluku Utara</option>
                        <option value="Papua">Papua</option>
                        <option value="Papua Barat">Papua Barat</option>
                        <option value="Papua Selatan">Papua Selatan</option>
                        <option value="Papua Tengah">Papua Tengah</option>
                        <option value="Papua Pegunungan">Papua Pegunungan</option>
                        </select>          
                    </div>

                    <div>
                      {areYouA === 'professional' ?
                        <>
                        <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Profession</label>
                        <select id="profession" name="profession" className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm text-sm focus:border-blue-500 focus:ring-blue-500"
                          value={profession}
                          onChange={(e)=>{setProfression(e.target.value)}}
                          defaultValue={''}
                        >
                          <option value="">Please Select</option>
                        <option value="Principal Brand">Principal Brand</option>
                        <option value="Distributors">Distributors</option>
                        <option value="Manufactures">Manufactures</option>
                        <option value="Purchasing">Purchasing</option>
                        <option value="Architecture Consultant">Architecture Consultant</option>
                        <option value="Contractor">Contractor</option>
                        <option value="Designer Interior">Designer Interior</option>
                        <option value="Project Owner">Project Owner</option>
                        <option value="Sales & Business Development">Sales & Business Development</option>
                        <option value="Property Developers">Property Developers</option>
                        <option value="MEP Consultant">MEP Consultant</option>
                        <option value="Structural Consultant">Structural Consultant</option>
                        <option value="Engineers">Engineers</option>
                        <option value="Building Management">Building Management</option>
                        <option value="Finance & Accounting">Finance & Accounting</option>
                        <option value="Research & Development">Research & Development</option>
                        <option value="Exporters & Importers">Exporters & Importers</option>
                        <option value="Government">Government</option>
                        <option value="Association">Association</option>
                        <option value="Investors">Investors</option>
                        <option value="Students">Students</option>
                        <option value="Academician">Academician</option>
                        </select>
                        </>
                      : <>
                        <label htmlFor="typeOfVendor" className="block text-sm font-medium text-gray-700">Type of Vendor</label> 
                        <select id="typeOfVendor" name="typeOfVendor" className="p-2 text-sm mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue={''}
                          value={typeOfVendor}
                          onChange={(e)=>{setTypeOfVendor(e.target.value)}}
                        > 
                          <option value="">Please select</option> 
                          <option value="Principal Brand Owner">Principal Brand Owner</option> 
                          <option value="Agent">Agent</option> 
                          <option value="Distributor">Distributor</option> 
                          <option value='Retailer "Toko Bangunan"'>Retailer "Toko Bangunan"</option> 
                          <option value="Sole Distributor">Sole Distributor</option> 
                        </select> 
                        </> }
                    </div>
                </div>
                {areYouA === 'brands' ?
                  <div className="py-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="bathrooms" className="text-blue-600 focus:ring-blue-500" />
                          <span>Bathrooms</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="kitchens" className="text-blue-600 focus:ring-blue-500" />
                          <span>Kitchens</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="floorings" className="text-blue-600 focus:ring-blue-500" />
                          <span>Floorings</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="ceilings" className="text-blue-600 focus:ring-blue-500" />
                          <span>Ceilings</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="wall_partitions" className="text-blue-600 focus:ring-blue-500" />
                          <span>Wall & Partitions</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="paints_protective_coatings" className="text-blue-600 focus:ring-blue-500" />
                          <span>Paints & Protective Coatings</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="cladding" className="text-blue-600 focus:ring-blue-500" />
                          <span>Cladding</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="processed_wood" className="text-blue-600 focus:ring-blue-500" />
                          <span>Processed Wood</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="roofing" className="text-blue-600 focus:ring-blue-500" />
                          <span>Roofing</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="door_windows" className="text-blue-600 focus:ring-blue-500" />
                          <span>Door & Windows</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="landscape_outdoors" className="text-blue-600 focus:ring-blue-500" />
                          <span>Landscape & Outdoors</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="furniture" className="text-blue-600 focus:ring-blue-500" />
                          <span>Furniture</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="interior_finishes" className="text-blue-600 focus:ring-blue-500" />
                          <span>Interior & Finishes</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="building_material" className="text-blue-600 focus:ring-blue-500" />
                          <span>Building Material</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="appliances" className="text-blue-600 focus:ring-blue-500" />
                          <span>Appliances</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="tools_machinery" className="text-blue-600 focus:ring-blue-500" />
                          <span>Tools & Machinery</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="intelligent_building_digital_architecture" className="text-blue-600 focus:ring-blue-500" />
                          <span>Intelligent Building & Digital Architecture</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="construction_chemical" className="text-blue-600 focus:ring-blue-500" />
                          <span>Construction Chemical</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="hse_products" className="text-blue-600 focus:ring-blue-500" />
                          <span>HSE Products</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="cement_concrete_mortar" className="text-blue-600 focus:ring-blue-500" />
                          <span>Cement, Concrete, Mortar</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="modular_construction_system" className="text-blue-600 focus:ring-blue-500" />
                          <span>Modular Construction System</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="structural_building_products" className="text-blue-600 focus:ring-blue-500" />
                          <span>Structural Building Products</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="iron_steel" className="text-blue-600 focus:ring-blue-500" />
                          <span>Iron & Steel</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="audio_visual_system" className="text-blue-600 focus:ring-blue-500" />
                          <span>Audio Visual System</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="hvacr" className="text-blue-600 focus:ring-blue-500" />
                          <span>HVACR</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="security_safety" className="text-blue-600 focus:ring-blue-500" />
                          <span>Security Safety</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="fire_safety" className="text-blue-600 focus:ring-blue-500" />
                          <span>Fire Safety</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="car_park_system" className="text-blue-600 focus:ring-blue-500" />
                          <span>Car Park System</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="lighting" className="text-blue-600 focus:ring-blue-500" />
                          <span>Lighting</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="electrical_system" className="text-blue-600 focus:ring-blue-500" />
                          <span>Electrical System</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="plumbing_drainage_systems" className="text-blue-600 focus:ring-blue-500" />
                          <span>Plumbing & Drainage Systems</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="maters_gauges_regulators" className="text-blue-600 focus:ring-blue-500" />
                          <span>Maters, Gauges & Regulators</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="product_category" value="Accessibility" className="text-blue-600 focus:ring-blue-500" />
                          <span>Accessibility</span>
                      </label>
                    </div>
                  </div>
                : <></> }

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Desired Feature</label>
                    {areYouA === 'professional' ? 
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="company-profile-landing-page" className="text-blue-600 focus:ring-blue-500" 
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(15)} 
                                  else {removeDesired(15)}
                                }}
                              />
                              <span>Company Profile Landing Page</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="project-portfolio" className="text-blue-600 focus:ring-blue-500" 
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(16)} 
                                  else {removeDesired(16)}
                                }}
                              />
                              <span>Project Portfolio</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="specification-sheets" className="text-blue-600 focus:ring-blue-500" 
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(17)} 
                                  else {removeDesired(17)}
                                }}
                              />
                              <span>Specification Sheets</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="material-search" className="text-blue-600 focus:ring-blue-500" 
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(18)} 
                                  else {removeDesired(18)}
                                }}
                              />
                              <span>Material Search</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="material-comparison" className="text-blue-600 focus:ring-blue-500" 
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(19)} 
                                  else {removeDesired(19)}
                                }}
                              />
                              <span>Material Comparison</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="search-for-suppliers" className="text-blue-600 focus:ring-blue-500" 
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(20)} 
                                  else {removeDesired(20)}
                                }}
                              />
                              <span>Search for Suppliers</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="publish-purchase-order" className="text-blue-600 focus:ring-blue-500" 
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(21)} 
                                  else {removeDesired(21)}
                                }}
                              />
                              <span>Publish Purchase Order</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="publish-budget-estimate-plan" className="text-blue-600 focus:ring-blue-500" 
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(22)} 
                                  else {removeDesired(22)}
                                }}
                              />
                              <span>Publish Budget Estimate Plan "RAB"</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="publish-tender" className="text-blue-600 focus:ring-blue-500" 
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(23)} 
                                  else {removeDesired(23)}
                                }}
                              />
                              <span>Publish Tender</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="request-for-quotation" className="text-blue-600 focus:ring-blue-500" 
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(24)} 
                                  else {removeDesired(24)}
                                }}
                              />
                              <span>Request for Quotation</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="request-for-brochure" className="text-blue-600 focus:ring-blue-500" 
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(25)} 
                                  else {removeDesired(25)}
                                }}
                              />
                              <span>Request for Brochure, eCatalogue</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="request-for-drawing-files" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(26)} 
                                  else {removeDesired(26)}
                                }}
                              />
                              <span>Request for Drawing Files</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="request-for-sample" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(27)} 
                                  else {removeDesired(27)}
                                }}
                              />
                              <span>Request for Sample</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="request-for-meeting" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(28)} 
                                  else {removeDesired(28)}
                                }}
                              />
                              <span>Request for Meeting</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="meet-supplier-online" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(29)} 
                                  else {removeDesired(29)}
                                }}
                              />
                              <span>Meet Supplier Online</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="location-matchmaking" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(30)} 
                                  else {removeDesired(30)}
                                }}
                              />
                              <span>Location Matchmaking</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="design-folder" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(31)} 
                                  else {removeDesired(31)}
                                }}
                              />
                              <span>Design Folder</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="checkbox" name="feature[]" value="material-calculator" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(32)} 
                                  else {removeDesired(32)}
                                }}
                              />
                              <span>Material Calculator</span>
                          </label>
                      </div>
                    : 
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Product-Showcase" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(2)} 
                                  else {removeDesired(2)}
                                }}
                              />
                            <span>Product Showcase</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Holding-Company-Account" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(3)} 
                                  else {removeDesired(3)}
                                }}
                              />
                            <span>Holding Company Account</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Location-Matchmaking" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(4)} 
                                  else {removeDesired(4)}
                                }}
                              />
                            <span>Location Matchmaking</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Admin-Brand-Account" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(5)} 
                                  else {removeDesired(5)}
                                }}
                              />
                            <span>Admin Brand Account</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Material-Calculator" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(6)} 
                                  else {removeDesired(6)}
                                }}
                              />
                            <span>Material Calculator</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Upload-CAD-PDF-BIM-Files" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(7)} 
                                  else {removeDesired(7)}
                                }}
                              />
                            <span>Upload CAD, PDF, BIM Files</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Live-Online-Meeting" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(8)} 
                                  else {removeDesired(8)}
                                }}
                              />
                            <span>Live Online Meeting</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Order-List" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(9)} 
                                  else {removeDesired(9)}
                                }}
                              />
                            <span>Order List</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Address-Book" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(10)} 
                                  else {removeDesired(10)}
                                }}
                              />
                            <span>Address Book</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Match-Making" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(11)} 
                                  else {removeDesired(11)}
                                }}
                              />
                            <span>Match Making</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Questionnaire" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(12)} 
                                  else {removeDesired(12)}
                                }}
                              />
                            <span>Questionnaire</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="Voucher-Validator" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(13)} 
                                  else {removeDesired(13)}
                                }}
                              />
                            <span>Voucher Validator</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="feature[]" value="POS" className="text-blue-600 focus:ring-blue-500"  
                                onChange={(e)=> {
                                  if (e.target.checked) {addDesired(15)} 
                                  else {removeDesired(15)}
                                }}
                              />
                            <span>POS</span>
                        </label>
                      </div>
                    }
                </div>

                <div className="py-4 flex space-x-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interested to receive early access <span className="font-normal">(Free Premium with incentives)</span>?</label>
                    <div className="flex space-x-4">
                    <div>
                        <input type="radio" id="earlyAccessYes" name="interested" value="Yes" 
                          checked={interested === 'Yes' ? true : false }
                          onChange={(e)=>{setInterested('Yes')}}
                        />
                        <label htmlFor="earlyAccessYes"> Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="earlyAccessNo" name="interested" value="Not" 
                          checked={interested === 'Not' ? true : false }
                          onChange={(e)=>{setInterested('Not')}}
                        />
                        <label htmlFor="earlyAccessNo"> No</label>
                    </div>
                    </div>
                </div>
                <div className="py-4">
                  <button type="button" className="font-medium w-full bg-yellow-400 text-white py-2 px-4 rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={()=> {
                      setMessage('Your request has been recorded.')
                      setseverity('success')
                      setOpen(true);
                    }}
                  >Join Inarcons</button>
                </div>
            </form>
        </div>
    </div>
              
    <Snackbar open={open} autoHideDuration={severity === 'error'? 20000 : 6000} onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal:'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%', bgcolor: '#388e3c', color : "white" }}
        color={severity === 'error' ? 'red' : "green"}
      >
        {message}
      </Alert>
    </Snackbar>
    </>
  );
}

export default App;