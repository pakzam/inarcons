import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-white shadow-lg rounded-lg mt-10 mb-10 p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Welcome to Inarcons</h1>
        <p className="text-gray-600 mb-6 text-sm ">One stop shop for your building materials, professionals, and networks</p>

        <form action="#" method="POST" className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Are You a</label>
                <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="role" value="professional" className="text-blue-600 focus:ring-blue-500" />
                        <span>Professional</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="role" value="brands" className="text-blue-600 focus:ring-blue-500" />
                        <span>Brands</span>
                    </label>
                </div>
            </div>
            <div>
                <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
                <label for="company-name" className="block text-sm font-medium text-gray-700">Company Name (as per NPWP)</label>
                <input type="text" id="company-name" name="company-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
                <label for="brand" className="block text-sm font-medium text-gray-700">Brand (insert comma if multiple)</label>
                <input type="text" id="brand" name="brand" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
                <label for="whatsapp-number" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                <input type="text" id="whatsapp-number" name="whatsapp-number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
                <label for="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
                <label for="domicile" className="block text-sm font-medium text-gray-700" >Domicile</label>
                <select id="domicile" name="domicile" className="w-full border-gray-300 rounded-md shadow-sm text-sm ">
                <option value="">Select Provinces</option>
                <option value="aceh">Aceh</option>
                <option value="sumatera-utara">Sumatera Utara</option>
                <option value="sumatera-barat">Sumatera Barat</option>
                <option value="riau">Riau</option>
                <option value="kepulauan-riau">Kepulauan Riau</option>
                <option value="jambi">Jambi</option>
                <option value="sumatera-selatan">Sumatera Selatan</option>
                <option value="bengkulu">Bengkulu</option>
                <option value="lampung">Lampung</option>
                <option value="bangka-belitung">Kepulauan Bangka Belitung</option>
                <option value="jakarta">Jakarta</option>
                <option value="jawa-barat">Jawa Barat</option>
                <option value="jawa-tengah">Jawa Tengah</option>
                <option value="yogyakarta">DI Yogyakarta</option>
                <option value="jawa-timur">Jawa Timur</option>
                <option value="banten">Banten</option>
                <option value="bali">Bali</option>
                <option value="nusa-tenggara-barat">Nusa Tenggara Barat</option>
                <option value="nusa-tenggara-timur">Nusa Tenggara Timur</option>
                <option value="kalimantan-barat">Kalimantan Barat</option>
                <option value="kalimantan-tengah">Kalimantan Tengah</option>
                <option value="kalimantan-selatan">Kalimantan Selatan</option>
                <option value="kalimantan-timur">Kalimantan Timur</option>
                <option value="kalimantan-utara">Kalimantan Utara</option>
                <option value="sulawesi-utara">Sulawesi Utara</option>
                <option value="sulawesi-tengah">Sulawesi Tengah</option>
                <option value="sulawesi-selatan">Sulawesi Selatan</option>
                <option value="sulawesi-tenggara">Sulawesi Tenggara</option>
                <option value="gorontalo">Gorontalo</option>
                <option value="sulawesi-barat">Sulawesi Barat</option>
                <option value="maluku">Maluku</option>
                <option value="maluku-utara">Maluku Utara</option>
                <option value="papua">Papua</option>
                <option value="papua-barat">Papua Barat</option>
                <option value="papua-selatan">Papua Selatan</option>
                <option value="papua-tengah">Papua Tengah</option>
                <option value="papua-pegunungan">Papua Pegunungan</option>
                </select>          
            </div>
            <div>
                <label for="profession" className="block text-sm font-medium text-gray-700">Profession</label>
                <select id="profession" name="profession" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-sm focus:border-blue-500 focus:ring-blue-500">
                <option value="principal_brand">Principal Brand</option>
                <option value="distributors">Distributors</option>
                <option value="manufactures">Manufactures</option>
                <option value="purchasing">Purchasing</option>
                <option value="architecture_consultant">Architecture Consultant</option>
                <option value="contractor">Contractor</option>
                <option value="designer_interior">Designer Interior</option>
                <option value="project_owner">Project Owner</option>
                <option value="sales_business_development">Sales & Business Development</option>
                <option value="property_developers">Property Developers</option>
                <option value="mep_consultant">MEP Consultant</option>
                <option value="structural_consultant">Structural Consultant</option>
                <option value="engineers">Engineers</option>
                <option value="building_management">Building Management</option>
                <option value="finance_accounting">Finance & Accounting</option>
                <option value="research_development">Research & Development</option>
                <option value="exporters_importers">Exporters & Importers</option>
                <option value="government">Government</option>
                <option value="association">Association</option>
                <option value="investors">Investors</option>
                <option value="students">Students</option>
                <option value="academician">Academician</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Desired Feature</label>
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="company-profile-landing-page" className="text-blue-600 focus:ring-blue-500" />
                        <span>Company Profile Landing Page</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="project-portfolio" className="text-blue-600 focus:ring-blue-500" />
                        <span>Project Portfolio</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="specification-sheets" className="text-blue-600 focus:ring-blue-500" />
                        <span>Specification Sheets</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="material-search" className="text-blue-600 focus:ring-blue-500" />
                        <span>Material Search</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="material-comparison" className="text-blue-600 focus:ring-blue-500" />
                        <span>Material Comparison</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="search-for-suppliers" className="text-blue-600 focus:ring-blue-500" />
                        <span>Search for Suppliers</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="publish-purchase-order" className="text-blue-600 focus:ring-blue-500" />
                        <span>Publish Purchase Order</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="publish-budget-estimate-plan" className="text-blue-600 focus:ring-blue-500" />
                        <span>Publish Budget Estimate Plan "RAB"</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="publish-tender" className="text-blue-600 focus:ring-blue-500" />
                        <span>Publish Tender</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="request-for-quotation" className="text-blue-600 focus:ring-blue-500" />
                        <span>Request for Quotation</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="request-for-brochure" className="text-blue-600 focus:ring-blue-500" />
                        <span>Request for Brochure, eCatalogue</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="request-for-drawing-files" className="text-blue-600 focus:ring-blue-500" />
                        <span>Request for Drawing Files</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="request-for-sample" className="text-blue-600 focus:ring-blue-500" />
                        <span>Request for Sample</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="request-for-meeting" className="text-blue-600 focus:ring-blue-500" />
                        <span>Request for Meeting</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="meet-supplier-online" className="text-blue-600 focus:ring-blue-500" />
                        <span>Meet Supplier Online</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="location-matchmaking" className="text-blue-600 focus:ring-blue-500" />
                        <span>Location Matchmaking</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="design-folder" className="text-blue-600 focus:ring-blue-500" />
                        <span>Design Folder</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="feature[]" value="material-calculator" className="text-blue-600 focus:ring-blue-500" />
                        <span>Material Calculator</span>
                    </label>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interested to receive early access (Free Premium with incentives)?</label>
                <div className="flex space-x-4">
                <div>
                    <input type="radio" id="earlyAccessYes" name="earlyAccess" value="yes" />
                    <label for="earlyAccessYes">Yes</label>
                </div>
                <div>
                    <input type="radio" id="earlyAccessNo" name="earlyAccess" value="no" />
                    <label for="earlyAccessNo">No</label>
                </div>
                </div>
            </div>
            <div className="pt-8 pb-8">
                <button type="submit" className="w-full bg-yellow-400 text-white py-2 px-4 rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
            </div>
        </form>
    </div>
  );
}

export default App;
