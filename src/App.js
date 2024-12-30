import './App.css';
import logo from './assets/img/logo-inarcons.png'
import Alert from '@mui/material/Alert';
import { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function App() {
  const [areYouA, setAreYouA] = useState('professional')
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState()
  const [brand, setBrand] = useState()
  const [whatsapp, setWhatsapp] = useState()
  const [domicile, setDomicile] = useState()
  const [profession, setProfression] = useState()
  const [email, setEmail] = useState()
  const [interested, setInterested] = useState('Yes')
  const [typeOfVendor,setTypeOfVendor] = useState('')
  const [message, setMessage] = useState()
  const [severity, setseverity] = useState()
  const [open, setOpen] = useState(false);
  const [desiredfeature, setDesiredfeature] = useState([])
  const [productCategory, setProductCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [openDialog, setOpenDialog] = useState(false);
 
  const handleOpen = () => setOpenDialog(!openDialog);

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

  const addProductCategory = (id) => {    
    const tempProductCategory =[]    
    if (productCategory.length > 0) {
      for (let i = 0; i < productCategory.length; i++) {
        tempProductCategory.push(productCategory[i]);                    
      } 
      tempProductCategory.push(id)
      setProductCategory(tempProductCategory)
    } else {
      setProductCategory([id])
    }
  }

  const removeProductCategory = (id) => {    
    let tempProductCategory = ''    
    if (productCategory.length > 0) {
      tempProductCategory = productCategory.filter((val)=> {
        return id !== val
      })
      setProductCategory(tempProductCategory)
    } else {
      setProductCategory([])
    }
  }

  
  const addSubCategory = (id) => {    
    const tempSubCategory =[]    
    if (subCategory.length > 0) {
      for (let i = 0; i < subCategory.length; i++) {
        tempSubCategory.push(subCategory[i]);                    
      } 
      tempSubCategory.push(id)
      setSubCategory(tempSubCategory)
    } else {
      setSubCategory([id])
    }
  }

  const removeSubCategory = (id) => {    
    let tempSubCategory = ''    
    if (subCategory.length > 0) {
      tempSubCategory = subCategory.filter((val)=> {
        return id !== val
      })
      setSubCategory(tempSubCategory)
    } else {
      setSubCategory([])
    }
  }

  useEffect(()=>{
    console.log('productCategory', productCategory)
  }, [productCategory])

  useEffect(()=>{
    console.log('desired', desiredfeature)
  }, [desiredfeature])

  const uncheck = () => {
    let tempDesired = ''    
    if (areYouA === 'professional') {
      const brandsDesiredFeature = document.getElementsByName('brandsDesiredFeature')  
      brandsDesiredFeature.forEach((val,id)=> {
        brandsDesiredFeature[id].checked = false
      }) 
      if (desiredfeature.length > 0) {
        tempDesired = desiredfeature.filter((val)=> {
          return val > 14
        })
        setDesiredfeature(tempDesired)
      }
      const brandsProductCategory = document.getElementsByName('productCategory')  
      brandsProductCategory.forEach((val,id)=> {
        brandsProductCategory[id].checked = false
      }) 
      setProductCategory([])
    } else {
      const profesionalDesiredFeature = document.getElementsByName('profesionalDesiredFeature')  
      profesionalDesiredFeature.forEach((val,id)=> {
        profesionalDesiredFeature[id].checked = false
      })        
      if (desiredfeature.length > 0) {
        tempDesired = desiredfeature.filter((val)=> {
          return val < 15
        })
        setDesiredfeature(tempDesired)
      }
    }
  }

  useEffect(() => {    
    uncheck()
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
                              onChange={()=>{
                                setAreYouA('professional') 
                                setTypeOfVendor('')
                              }}
                            />
                            <span>Professional</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="areYouA" value="brands" className="text-blue-600 focus:ring-blue-500" 
                              checked={areYouA === 'brands' ? true : false}
                              onChange={()=>{
                                setAreYouA('brands')
                                setProfression('')
                              }}
                            />
                            <span>Brands</span>
                        </label>
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="border p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                </div>
              </div>
              
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name <span className="font-normal">(as per NPWP)</span></label>
                        <input type="text" id="companyName" name="companyName" className="border p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}}
                        />
                    </div>
                    <div>
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand <span className="font-normal">(insert comma if multiple)</span></label>
                        <textarea type="text" id="brand" name="brand" className="border p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                          value={brand} onChange={(e)=>{setBrand(e.target.value)}}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                        <input type="tel" id="whatsapp" name="whatsapp" className="border p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                          value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                        <input type="email" id="email" name="email" className="border p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                          value={email} onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    <div>
                        <label htmlFor="domicile" className="block text-sm font-medium text-gray-700" >Domicile</label>
                        <select id="domicile"  name="domicile" className="border p-2 mt-1 w-full border-gray-300 rounded-md shadow-sm text-sm "
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
                        <select id="profession" name="profession" className="border p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm text-sm focus:border-blue-500 focus:ring-blue-500"
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
                        <select id="typeOfVendor" name="typeOfVendor" className="border p-2 text-sm mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                
                <div className={areYouA === 'brands' ? "py-4" : "hidden" }>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-start">
                    <div  className="grid grid-cols-1 ">
                      <label className="flex items-center space-x-2 mb-1">
                          <input type="checkbox" name="productCategory" value="bathrooms" className="text-blue-600 focus:ring-blue-500"   
                            onChange={(e)=> {
                              if (e.target.checked) {addProductCategory(1)} 
                              else {removeProductCategory(1)}
                            }}
                          />
                          <span>Bathrooms</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subBathroom" value="Sanitary Ware" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(1)} 
                            else {removeSubCategory(1)}
                          }}
                        />
                        <span>Sanitary Ware</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subBathroom" value="Sanitary Fitting" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(2)} 
                            else {removeSubCategory(2)}
                          }}
                        />
                        <span>Sanitary Fitting</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subBathroom" value="Cubicle & Partitions" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(3)} 
                            else {removeSubCategory(3)}
                          }}
                        />
                        <span>Cubicle & Partitions</span>
                      </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="productCategory" value="kitchens" className="text-blue-600 focus:ring-blue-500"    
                            onChange={(e)=> {
                              if (e.target.checked) {addProductCategory(2)} 
                              else {removeProductCategory(2)}
                            }}
                          />
                          <span>Kitchens</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subKitchens" value="Kitchen Accessories" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(4)} 
                            else {removeSubCategory(4)}
                          }}
                        />
                        <span>Kitchen Accessories</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subKitchens" value="Appliances" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(5)} 
                            else {removeSubCategory(5)}
                          }}
                        />
                        <span>Appliances</span>
                      </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="productCategory" value="floorings" className="text-blue-600 focus:ring-blue-500"    
                            onChange={(e)=> {
                              if (e.target.checked) {addProductCategory(3)} 
                              else {removeProductCategory(3)}
                            }}
                          />
                          <span>Floorings</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Marble" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(6)} 
                            else {removeSubCategory(6)}
                          }}
                        />
                        <span>Marble</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Mosaic Tiles" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(7)} 
                            else {removeSubCategory(7)}
                          }}
                        />
                        <span>Mosaic Tiles</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Vinyl Flooring" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(8)} 
                            else {removeSubCategory(8)}
                          }}
                        />
                        <span>Vinyl Flooring</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Ceramic Tiles" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(9)} 
                            else {removeSubCategory(9)}
                          }}
                        />
                        <span>Ceramic Tiles</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Homogeneous Flooring Tiles" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(10)} 
                            else {removeSubCategory(10)}
                          }}
                        />
                        <span>Homogeneous Flooring Tiles</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Granite Flooring Tiles" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(11)} 
                            else {removeSubCategory(11)}
                          }}
                        />
                        <span>Granite Flooring Tiles</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Stone Plastic Composite Flooring" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(12)} 
                            else {removeSubCategory(12)}
                          }}
                        />
                        <span>Stone Plastic Composite Flooring</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Parquet Flooring" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(13)} 
                            else {removeSubCategory(13)}
                          }}
                        />
                        <span>Parquet Flooring</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Ceramic Tiles" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(14)} 
                            else {removeSubCategory(14)}
                          }}
                        />
                        <span>Ceramic Tiles</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Tile Grout" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(15)} 
                            else {removeSubCategory(15)}
                          }}
                        />
                        <span>Tile Grout</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Wood Plastic Composite (WPC) Flooring" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(16)} 
                            else {removeSubCategory(16)}
                          }}
                        />
                        <span>Wood Plastic Composite (WPC) Flooring</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Outdoor Floor" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(17)} 
                            else {removeSubCategory(17)}
                          }}
                        />
                        <span>Outdoor Floor</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subFloorings" value="Floor Deck System" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(18)} 
                            else {removeSubCategory(18)}
                          }}
                        />
                        <span>Floor Deck System</span>
                      </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="productCategory" value="ceilings" className="text-blue-600 focus:ring-blue-500"    
                            onChange={(e)=> {
                              if (e.target.checked) {addProductCategory(4)} 
                              else {removeProductCategory(4)}
                            }}
                          />
                          <span>Ceilings</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCeilings" value="Plafond GRC" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(19)} 
                            else {removeSubCategory(19)}
                          }}
                        />
                        <span>Plafond GRC</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCeilings" value="Plafond Gypsum" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(20)} 
                            else {removeSubCategory(20)}
                          }}
                        />
                        <span>Plafond Gypsum</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCeilings" value="PVC Ceiling Panels" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(21)} 
                            else {removeSubCategory(21)}
                          }}
                        />
                        <span>PVC Ceiling Panels</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCeilings" value="Ceiling Frame" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(22)} 
                            else {removeSubCategory(22)}
                          }}
                        />
                        <span>Ceiling Frame</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCeilings" value="Glass Reinforced Concrete (GRC)" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(23)} 
                            else {removeSubCategory(23)}
                          }}
                        />
                        <span>Glass Reinforced Concrete (GRC)</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCeilings" value="Gypsum Board" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(24)} 
                            else {removeSubCategory(24)}
                          }}
                        />
                        <span>Gypsum Board</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCeilings" value="Cement Fiberboard" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(25)} 
                            else {removeSubCategory(25)}
                          }}
                        />
                        <span>Cement Fiberboard</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCeilings" value="Acoustic Insulation / Soundproofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(26)} 
                            else {removeSubCategory(26)}
                          }}
                        />
                        <span>Acoustic Insulation / Soundproofing</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCeilings" value="Corner Beads for Drywall" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(27)} 
                            else {removeSubCategory(27)}
                          }}
                        />
                        <span>Corner Beads for Drywall</span>
                      </label>
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCeilings" value="Fiberglass Building Materials" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(28)} 
                            else {removeSubCategory(28)}
                          }}
                        />
                        <span>Fiberglass Building Materials</span>
                      </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="productCategory" value="wall_partitions" className="text-blue-600 focus:ring-blue-500"    
                            onChange={(e)=> {
                              if (e.target.checked) {addProductCategory(5)} 
                              else {removeProductCategory(5)}
                            }}
                          />
                          <span>Wall & Partitions</span>
                      </label>                      
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subWallPartitions" value="Wall" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(29)} 
                            else {removeSubCategory(29)}
                          }}
                        />
                        <span>Wall</span>
                      </label>                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subWallPartitions" value="Partitions" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(30)} 
                            else {removeSubCategory(30)}
                          }}
                        />
                        <span>Partitions</span>
                      </label>                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subWallPartitions" value="Slab, Sheet, Board" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(31)} 
                            else {removeSubCategory(31)}
                          }}
                        />
                        <span>Slab, Sheet, Board</span>
                      </label>                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subWallPartitions" value="Acoustic" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(32)} 
                            else {removeSubCategory(32)}
                          }}
                        />
                        <span>Acoustic</span>
                      </label>                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subWallPartitions" value="Insulation & Thermal Barrier" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(33)} 
                            else {removeSubCategory(33)}
                          }}
                        />
                        <span>Insulation & Thermal Barrier</span>
                      </label>                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subWallPartitions" value="Concrete Block" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(34)} 
                            else {removeSubCategory(34)}
                          }}
                        />
                        <span>Concrete Block</span>
                      </label>                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subWallPartitions" value="Aerated Concrete Block" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(35)} 
                            else {removeSubCategory(35)}
                          }}
                        />
                        <span>Aerated Concrete Block</span>
                      </label>                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subWallPartitions" value="Red Brick" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(36)} 
                            else {removeSubCategory(36)}
                          }}
                        />
                        <span>Red Brick</span>
                      </label>                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subWallPartitions" value="Mortar" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(37)} 
                            else {removeSubCategory(37)}
                          }}
                        />
                        <span>Mortar</span>
                      </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="paints_protective_coatings" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(6)} 
                            else {removeProductCategory(6)}
                          }}
                        />
                        <span>Paints & Protective Coatings</span>
                      </label>                   
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Floor Paint" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(38)} 
                            else {removeSubCategory(38)}
                          }}
                        />
                        <span>Floor Paint</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Natural Stone Coating" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(39)} 
                            else {removeSubCategory(39)}
                          }}
                        />
                        <span>Natural Stone Coating</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Metal and Iron Paint" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(40)} 
                            else {removeSubCategory(40)}
                          }}
                        />
                        <span>Metal and Iron Paint</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Waterproof Coating" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(41)} 
                            else {removeSubCategory(41)}
                          }}
                        />
                        <span>Waterproof Coating</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Wall Paint" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(42)} 
                            else {removeSubCategory(42)}
                          }}
                        />
                        <span>Wall Paint</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Gypsum & Plasterboard Paint" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(43)} 
                            else {removeSubCategory(43)}
                          }}
                        />
                        <span>Gypsum & Plasterboard Paint</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Roof Paint" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(44)} 
                            else {removeSubCategory(44)}
                          }}
                        />
                        <span>Roof Paint</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Decorative Paint" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(45)} 
                            else {removeSubCategory(45)}
                          }}
                        />
                        <span>Decorative Paint</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Fire-resistant Coating" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(46)} 
                            else {removeSubCategory(46)}
                          }}
                        />
                        <span>Fire-resistant Coating</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Varnish & Wood Finish" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(47)} 
                            else {removeSubCategory(47)}
                          }}
                        />
                        <span>Varnish & Wood Finish</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Leak-resistant Fiber" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(48)} 
                            else {removeSubCategory(48)}
                          }}
                        />
                        <span>Leak-resistant Fiber</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Protective Coatings & Gloss Finish" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(49)} 
                            else {removeSubCategory(49)}
                          }}
                        />
                        <span>Protective Coatings & Gloss Finish</span>
                      </label>                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subPaintsProtectiveCoatings" value="Plaster & Stucco" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(50)} 
                            else {removeSubCategory(50)}
                          }}
                        />
                        <span>Plaster & Stucco</span>
                      </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="productCategory" value="cladding" className="text-blue-600 focus:ring-blue-500"    
                            onChange={(e)=> {
                              if (e.target.checked) {addProductCategory(7)} 
                              else {removeProductCategory(7)}
                            }}
                          />
                          <span>Cladding</span>
                      </label>                                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCladding" value="Wallpanel" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(51)} 
                            else {removeSubCategory(51)}
                          }}
                        />
                        <span>Wallpanel</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCladding" value="Facade" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(52)} 
                            else {removeSubCategory(52)}
                          }}
                        />
                        <span>Facade</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCladding" value="ACP" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(53)} 
                            else {removeSubCategory(53)}
                          }}
                        />
                        <span>ACP</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subCladding" value="Modified Clay Material (MCM)" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(54)} 
                            else {removeSubCategory(54)}
                          }}
                        />
                        <span>Modified Clay Material (MCM)</span>
                      </label> 
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="productCategory" value="processed_wood" className="text-blue-600 focus:ring-blue-500"    
                            onChange={(e)=> {
                              if (e.target.checked) {addProductCategory(8)} 
                              else {removeProductCategory(8)}
                            }}
                          />
                          <span>Processed Wood</span>
                      </label>                                   
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subProcessedWood" value="Plywood" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(55)} 
                            else {removeSubCategory(55)}
                          }}
                        />
                        <span>Plywood</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subProcessedWood" value="Blockboard" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(56)} 
                            else {removeSubCategory(56)}
                          }}
                        />
                        <span>Blockboard</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subProcessedWood" value="HDF / Hardboard" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(57)} 
                            else {removeSubCategory(57)}
                          }}
                        />
                        <span>HDF / Hardboard</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subProcessedWood" value="MDF" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(58)} 
                            else {removeSubCategory(58)}
                          }}
                        />
                        <span>MDF</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subProcessedWood" value="HMR" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(59)} 
                            else {removeSubCategory(59)}
                          }}
                        />
                        <span>HMR</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subProcessedWood" value="LDF / Particle Board" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(60)} 
                            else {removeSubCategory(60)}
                          }}
                        />
                        <span>LDF / Particle Board</span>
                      </label>  
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="productCategory" value="roofing" className="text-blue-600 focus:ring-blue-500"    
                            onChange={(e)=> {
                              if (e.target.checked) {addProductCategory(9)} 
                              else {removeProductCategory(9)}
                            }}
                          />
                          <span>Roofing</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Awning" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(61)} 
                            else {removeSubCategory(61)}
                          }}
                        />
                        <span>Awning</span>
                      </label>                                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Gutters" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(62)} 
                            else {removeSubCategory(62)}
                          }}
                        />
                        <span>Gutters</span>
                      </label>                                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Ridge" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(63)} 
                            else {removeSubCategory(63)}
                          }}
                        />
                        <span>Ridge</span>
                      </label>                                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Roof Structure & Frames" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(64)} 
                            else {removeSubCategory(64)}
                          }}
                        />
                        <span>Roof Structure & Frames</span>
                      </label>                                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Lightweight Steel Frames" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(65)} 
                            else {removeSubCategory(65)}
                          }}
                        />
                        <span>Lightweight Steel Frames</span>
                      </label>                                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Roof Accessories" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(66)} 
                            else {removeSubCategory(66)}
                          }}
                        />
                        <span>Roof Accessories</span>
                      </label>                                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Bitumen Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(67)} 
                            else {removeSubCategory(67)}
                          }}
                        />
                        <span>Bitumen Roofing</span>
                      </label>                                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="uPVC Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(68)} 
                            else {removeSubCategory(68)}
                          }}
                        />
                        <span>uPVC Roofing</span>
                      </label>                                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="PVC Structured Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(69)} 
                            else {removeSubCategory(69)}
                          }}
                        />
                        <span>PVC Structured Roofing</span>
                      </label>                                     
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Spandex Roofing Sheets" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(70)} 
                            else {removeSubCategory(70)}
                          }}
                        />
                        <span>Spandex Roofing Sheets</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Cement Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(71)} 
                            else {removeSubCategory(71)}
                          }}
                        />
                        <span>Cement Roofing</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Concrete Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(72)} 
                            else {removeSubCategory(72)}
                          }}
                        />
                        <span>Concrete Roofing</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Polycarbonate Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(73)} 
                            else {removeSubCategory(73)}
                          }}
                        />
                        <span>Polycarbonate Roofing</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Gutter Liners" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(74)} 
                            else {removeSubCategory(74)}
                          }}
                        />
                        <span>Gutter Liners</span>
                      </label>                                    
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Corrugated Metal Sheets" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(75)} 
                            else {removeSubCategory(75)}
                          }}
                        />
                        <span>Corrugated Metal Sheets</span>
                      </label>                                   
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Sustainable Green Roofs" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(76)} 
                            else {removeSubCategory(76)}
                          }}
                        />
                        <span>Sustainable Green Roofs</span>
                      </label>                                   
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Shingle Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(77)} 
                            else {removeSubCategory(77)}
                          }}
                        />
                        <span>Shingle Roofing</span>
                      </label>                                   
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Membrane Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(78)} 
                            else {removeSubCategory(78)}
                          }}
                        />
                        <span>Membrane Roofing</span>
                      </label>                                   
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Thatched Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(79)} 
                            else {removeSubCategory(79)}
                          }}
                        />
                        <span>Thatched Roofing</span>
                      </label>                                   
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Fibre Cement Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(80)} 
                            else {removeSubCategory(80)}
                          }}
                        />
                        <span>Fibre Cement Roofing</span>
                      </label>                                   
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Stone Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(81)} 
                            else {removeSubCategory(81)}
                          }}
                        />
                        <span>Stone Roofing</span>
                      </label>                                   
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Decoration Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(82)} 
                            else {removeSubCategory(82)}
                          }}
                        />
                        <span>Decoration Roofing</span>
                      </label>                                   
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subRoofing" value="Ceramic Roofing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(83)} 
                            else {removeSubCategory(83)}
                          }}
                        />
                        <span>Ceramic Roofing</span>
                      </label>    
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="productCategory" value="door_windows" className="text-blue-600 focus:ring-blue-500"    
                            onChange={(e)=> {
                              if (e.target.checked) {addProductCategory(10)} 
                              else {removeProductCategory(10)}
                            }}
                          />
                          <span>Door & Windows</span>
                      </label>                                   
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Ironmongery" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(84)} 
                            else {removeSubCategory(84)}
                          }}
                        />
                        <span>Ironmongery</span>
                      </label>                                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Digital Lock" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(85)} 
                            else {removeSubCategory(85)}
                          }}
                        />
                        <span>Digital Lock</span>
                      </label>                                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Steel Door" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(86)} 
                            else {removeSubCategory(86)}
                          }}
                        />
                        <span>Steel Door</span>
                      </label>                                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Wooden Door" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(87)} 
                            else {removeSubCategory(87)}
                          }}
                        />
                        <span>Wooden Door</span>
                      </label>                                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Shutter/Rolling Door" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(88)} 
                            else {removeSubCategory(88)}
                          }}
                        />
                        <span>Shutter/Rolling Door</span>
                      </label>                                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="ABS Door" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(89)} 
                            else {removeSubCategory(89)}
                          }}
                        />
                        <span>ABS Door</span>
                      </label>                                 
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="WPC Door" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(90)} 
                            else {removeSubCategory(90)}
                          }}
                        />
                        <span>WPC Door</span>
                      </label>                                
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="PVC Door" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(91)} 
                            else {removeSubCategory(91)}
                          }}
                        />
                        <span>PVC Door</span>
                      </label>                                
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Aluminum Door" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(92)} 
                            else {removeSubCategory(92)}
                          }}
                        />
                        <span>Aluminum Door</span>
                      </label>                                
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="uPVC Door" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(93)} 
                            else {removeSubCategory(93)}
                          }}
                        />
                        <span>uPVC Door</span>
                      </label>                                
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Engineered Door" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(94)} 
                            else {removeSubCategory(94)}
                          }}
                        />
                        <span>Engineered Door</span>
                      </label>                                
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Automatic Doors/Gates" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(95)} 
                            else {removeSubCategory(95)}
                          }}
                        />
                        <span>Automatic Doors/Gates</span>
                      </label>                                
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Folding & Sliding Doors" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(96)} 
                            else {removeSubCategory(96)}
                          }}
                        />
                        <span>Folding & Sliding Doors</span>
                      </label>                                
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Aluminum Profile" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(97)} 
                            else {removeSubCategory(97)}
                          }}
                        />
                        <span>Aluminum Profile</span>
                      </label>                                
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Glass & Glazing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(98)} 
                            else {removeSubCategory(98)}
                          }}
                        />
                        <span>Glass & Glazing</span>
                      </label>                                
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Windows & Fittings" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(99)} 
                            else {removeSubCategory(99)}
                          }}
                        />
                        <span>Windows & Fittings</span>
                      </label>                               
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subDoorWindows" value="Windows & Accessories" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(100)} 
                            else {removeSubCategory(100)}
                          }}
                        />
                        <span>Windows & Accessories</span>
                      </label>   
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="productCategory" value="landscape_outdoors" className="text-blue-600 focus:ring-blue-500"    
                            onChange={(e)=> {
                              if (e.target.checked) {addProductCategory(11)} 
                              else {removeProductCategory(11)}
                            }}
                          />
                          <span>Landscape & Outdoors</span>
                      </label>                             
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subLandscapeOutdoors" value="Garages & Fencing" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(101)} 
                            else {removeSubCategory(101)}
                          }}
                        />
                        <span>Garages & Fencing</span>
                      </label>                             
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subLandscapeOutdoors" value="Paving & Decking" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(102)} 
                            else {removeSubCategory(102)}
                          }}
                        />
                        <span>Paving & Decking</span>
                      </label>                             
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subLandscapeOutdoors" value="Furniture, Furnishing, Fixtures" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(103)} 
                            else {removeSubCategory(103)}
                          }}
                        />
                        <span>Furniture, Furnishing, Fixtures</span>
                      </label>                             
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subLandscapeOutdoors" value="Green Walls & Vertical Gardens" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(104)} 
                            else {removeSubCategory(104)}
                          }}
                        />
                        <span>Green Walls & Vertical Gardens</span>
                      </label>                             
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subLandscapeOutdoors" value="Plants, Pots,Trees" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(105)} 
                            else {removeSubCategory(105)}
                          }}
                        />
                        <span>Plants, Pots,Trees</span>
                      </label>                             
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subLandscapeOutdoors" value="Outdoor Playground Equipment" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(106)} 
                            else {removeSubCategory(106)}
                          }}
                        />
                        <span>Outdoor Playground Equipment</span>
                      </label>                             
                      <label className=" ml-5 items-center space-x-2">
                        <input type="checkbox" name="subLandscapeOutdoors" value="Pools, Spa, Sauna Solutions" className="text-blue-600 focus:ring-blue-500"   
                          onChange={(e)=> {
                            if (e.target.checked) {addSubCategory(107)} 
                            else {removeSubCategory(107)}
                          }}
                        />
                        <span>Pools, Spa, Sauna Solutions</span>
                      </label> 
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="furniture" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(12)} 
                            else {removeProductCategory(12)}
                          }}
                        />
                        <span>Furniture</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="interior_finishes" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(13)} 
                            else {removeProductCategory(13)}
                          }}
                        />
                        <span>Interior & Finishes</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="building_material" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(14)} 
                            else {removeProductCategory(14)}
                          }}
                        />
                        <span>Building Material</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="appliances" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(15)} 
                            else {removeProductCategory(15)}
                          }}
                        />
                        <span>Appliances</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="tools_machinery" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(16)} 
                            else {removeProductCategory(16)}
                          }}
                        />
                        <span>Tools & Machinery</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="intelligent_building_digital_architecture" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(17)} 
                            else {removeProductCategory(17)}
                          }}
                        />
                        <span>Intelligent Building & Digital Architecture</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="construction_chemical" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(18)} 
                            else {removeProductCategory(18)}
                          }}
                        />
                        <span>Construction Chemical</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="hse_products" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(19)} 
                            else {removeProductCategory(19)}
                          }}
                        />
                        <span>HSE Products</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="cement_concrete_mortar" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(20)} 
                            else {removeProductCategory(20)}
                          }}
                        />
                        <span>Cement, Concrete, Mortar</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="modular_construction_system" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(21)} 
                            else {removeProductCategory(21)}
                          }}
                        />
                        <span>Modular Construction System</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="structural_building_products" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(22)} 
                            else {removeProductCategory(22)}
                          }}
                        />
                        <span>Structural Building Products</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="iron_steel" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(23)} 
                            else {removeProductCategory(23)}
                          }}
                        />
                        <span>Iron & Steel</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="audio_visual_system" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(24)} 
                            else {removeProductCategory(24)}
                          }}
                        />
                        <span>Audio Visual System</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="hvacr" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(25)} 
                            else {removeProductCategory(25)}
                          }}
                        />
                        <span>HVACR</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="security_safety" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(26)} 
                            else {removeProductCategory(26)}
                          }}
                        />
                        <span>Security Safety</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="fire_safety" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(27)} 
                            else {removeProductCategory(27)}
                          }}
                        />
                        <span>Fire Safety</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="car_park_system" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(28)} 
                            else {removeProductCategory(28)}
                          }}
                        />
                        <span>Car Park System</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="lighting" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(29)} 
                            else {removeProductCategory(29)}
                          }}
                        />
                        <span>Lighting</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="electrical_system" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(30)} 
                            else {removeProductCategory(30)}
                          }}
                        />
                        <span>Electrical System</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="plumbing_drainage_systems" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(31)} 
                            else {removeProductCategory(31)}
                          }}
                        />
                        <span>Plumbing & Drainage Systems</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="maters_gauges_regulators" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(32)} 
                            else {removeProductCategory(32)}
                          }}
                        />
                        <span>Maters, Gauges & Regulators</span>
                    </label>
                    </div>
                    <div className="grid grid-cols-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="productCategory" value="Accessibility" className="text-blue-600 focus:ring-blue-500"    
                          onChange={(e)=> {
                            if (e.target.checked) {addProductCategory(33)} 
                            else {removeProductCategory(33)}
                          }}
                        />
                        <span>Accessibility</span>
                    </label>
                    </div>
                  </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Desired Feature</label>
                    <div className={ areYouA === 'professional' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4": "hidden"}>
                        <label className="flex items-center space-x-2">
                            <input id="companyProfileLandingPageRef" type="checkbox" name="profesionalDesiredFeature" 
                              value="COMPANY PROFILE LANDING PAGE" className="text-blue-600 focus:ring-blue-500" 
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(15)} 
                                else {removeDesired(15)}
                              }}
                            />
                            <span>Company Profile Landing Page</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="project-portfolio" className="text-blue-600 focus:ring-blue-500" 
                              id="projectPortfolio"
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(16)} 
                                else {removeDesired(16)}
                              }}
                            />
                            <span>Project Portfolio</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="specification-sheets" className="text-blue-600 focus:ring-blue-500" 
                              id="specificationSheets"
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(17)} 
                                else {removeDesired(17)}
                              }}
                            />
                            <span>Specification Sheets</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="material-search" className="text-blue-600 focus:ring-blue-500" 
                              id="materialSearch"
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(18)} 
                                else {removeDesired(18)}
                              }}
                            />
                            <span>Material Search</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="material-comparison" className="text-blue-600 focus:ring-blue-500" 
                              id="materialComparison"
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(19)} 
                                else {removeDesired(19)}
                              }}
                            />
                            <span>Material Comparison</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="search-for-suppliers" className="text-blue-600 focus:ring-blue-500" 
                              id="searchForSuppliers"
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(20)} 
                                else {removeDesired(20)}
                              }}
                            />
                            <span>Search for Suppliers</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="publish-purchase-order" className="text-blue-600 focus:ring-blue-500" 
                              id="publishPurchaseOrder"
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(21)} 
                                else {removeDesired(21)}
                              }}
                            />
                            <span>Publish Purchase Order</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="publish-budget-estimate-plan" className="text-blue-600 focus:ring-blue-500" 
                              id="PublishBudgetEstimatePlanRAB"
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(22)} 
                                else {removeDesired(22)}
                              }}
                            />
                            <span>Publish Budget Estimate Plan "RAB"</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="publish-tender" className="text-blue-600 focus:ring-blue-500" 
                              id="PublishTender"
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(23)} 
                                else {removeDesired(23)}
                              }}
                            />
                            <span>Publish Tender</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="request-for-quotation" className="text-blue-600 focus:ring-blue-500" 
                              id="RequestForQuotation"
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(24)} 
                                else {removeDesired(24)}
                              }}
                            />
                            <span>Request for Quotation</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="request-for-brochure" className="text-blue-600 focus:ring-blue-500" 
                              id="RequestForBrochureECatalogue"
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(25)} 
                                else {removeDesired(25)}
                              }}
                            />
                            <span>Request for Brochure, eCatalogue</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="request-for-drawing-files" className="text-blue-600 focus:ring-blue-500"  
                              id="RequestForDrawingFiles"
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(26)} 
                                else {removeDesired(26)}
                              }}
                            />
                            <span>Request for Drawing Files</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="request-for-sample" className="text-blue-600 focus:ring-blue-500"  
                              id=""
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(27)} 
                                else {removeDesired(27)}
                              }}
                            />
                            <span>Request for Sample</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="request-for-meeting" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(28)} 
                                else {removeDesired(28)}
                              }}
                            />
                            <span>Request for Meeting</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="meet-supplier-online" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(29)} 
                                else {removeDesired(29)}
                              }}
                            />
                            <span>Meet Supplier Online</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="location-matchmaking" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(30)} 
                                else {removeDesired(30)}
                              }}
                            />
                            <span>Location Matchmaking</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="design-folder" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(31)} 
                                else {removeDesired(31)}
                              }}
                            />
                            <span>Design Folder</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="profesionalDesiredFeature" value="material-calculator" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(32)} 
                                else {removeDesired(32)}
                              }}
                            />
                            <span>Material Calculator</span>
                        </label>
                    </div>
                    <div className={ areYouA === 'brands' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" : "hidden"}>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Product-Showcase" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(2)} 
                                else {removeDesired(2)}
                              }}
                            />
                          <span>Product Showcase</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Holding-Company-Account" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(3)} 
                                else {removeDesired(3)}
                              }}
                            />
                          <span>Holding Company Account</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Location-Matchmaking" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(4)} 
                                else {removeDesired(4)}
                              }}
                            />
                          <span>Location Matchmaking</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Admin-Brand-Account" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(5)} 
                                else {removeDesired(5)}
                              }}
                            />
                          <span>Admin Brand Account</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Material-Calculator" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(6)} 
                                else {removeDesired(6)}
                              }}
                            />
                          <span>Material Calculator</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Upload-CAD-PDF-BIM-Files" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(7)} 
                                else {removeDesired(7)}
                              }}
                            />
                          <span>Upload CAD, PDF, BIM Files</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Live-Online-Meeting" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(8)} 
                                else {removeDesired(8)}
                              }}
                            />
                          <span>Live Online Meeting</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Order-List" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(9)} 
                                else {removeDesired(9)}
                              }}
                            />
                          <span>Order List</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Address-Book" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(10)} 
                                else {removeDesired(10)}
                              }}
                            />
                          <span>Address Book</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Match-Making" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(11)} 
                                else {removeDesired(11)}
                              }}
                            />
                          <span>Match Making</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Questionnaire" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(12)} 
                                else {removeDesired(12)}
                              }}
                            />
                          <span>Questionnaire</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="Voucher-Validator" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(13)} 
                                else {removeDesired(13)}
                              }}
                            />
                          <span>Voucher Validator</span>
                      </label>
                      <label className="flex items-center space-x-2">
                          <input type="checkbox" name="brandsDesiredFeature" value="POS" className="text-blue-600 focus:ring-blue-500"  
                              onChange={(e)=> {
                                if (e.target.checked) {addDesired(15)} 
                                else {removeDesired(15)}
                              }}
                            />
                          <span>POS</span>
                      </label>
                    </div>
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
                  <button type="button" 
                    className={name && name !== '' ? "font-medium w-full bg-yellow-400 text-white py-2 px-4 rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      : "font-medium w-full bg-gray-500   text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 opacity-50 cursor-not-allowed"
                    }
                    disabled={!name || name === ''}
                    onClick={async () => {
                      console.log({
                        areYouA: areYouA,
                        name: name,
                        companyName: companyName,
                        brand: brand,
                        whatsapp: whatsapp,
                        email: email,
                        domicile: domicile,
                        profession: profession,
                        typeOfVendor: typeOfVendor,
                        interested: interested === 'Not'? 0 : 1,
                        desiredfeature: desiredfeature,
                        productCategory: productCategory
                      })
                     
                      const {data} = await axios.post('https://inarconsapi.indomaber.com/earlyaccess', {
                        areYouA: areYouA,
                        name: name,
                        companyName: companyName,
                        brand: brand,
                        whatsapp: whatsapp,
                        email: email,
                        domicile: domicile,
                        profession: profession,
                        typeOfVendor: typeOfVendor,
                        interested: interested === 'Not'? 0 : 1,
                        desiredfeature: desiredfeature,
                        productCategory: productCategory
                      }, {
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded'
                        }
                      })
                      if (data) {
                        console.log(data)
                        if (data?.sqlMessage) {
                          setMessage(data.sqlMessage)
                          setseverity('error')
                        } else {
                          setMessage('Data berhasil di input.')
                          setseverity('success')
                        }
                        //setOpen(true);
                        setOpenDialog(true)
                      }
                      
                    }}
                  >Join Inarcons</button>
                </div>
            </form>
        </div>
    </div>
    
    <Dialog
        open={openDialog}
        onClose={handleOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Success!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your data has been recorded and you will be notified when this project launches.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpen} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
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
