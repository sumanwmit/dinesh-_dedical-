import React, { useState, useMemo } from 'react';
import { Search, Filter, AlertCircle, CheckCircle2, Clock, MessageSquare, RefreshCw, Pill } from 'lucide-react';
import medicineDataRaw from '../data/medicineStock.json';
import { MedicineItem } from '../types';

interface MedicineStockCheckerProps {
  onOrderClick?: (medicineName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ onOrderClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const medicines: MedicineItem[] = medicineDataRaw as MedicineItem[];

  const categories = useMemo(() => {
    const cats = new Set(medicines.map(m => m.category));
    return ['All', ...Array.from(cats)];
  }, [medicines]);

  const filteredMedicines = useMemo(() => {
    return medicines.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [medicines, searchQuery, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: MedicineItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" />
            In Stock
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
            <Clock className="w-3.5 h-3.5 mr-1 text-amber-600 dark:text-amber-400" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-300">
            <AlertCircle className="w-3.5 h-3.5 mr-1 text-red-600 dark:text-red-400" />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-2">
            <Pill className="w-3.5 h-3.5" />
            <span>Live Inventory Database</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Medicine Stock Checker
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Search live medicine availability at Dinesh Medical Hall, Hospital Mor, Jehanabad.
          </p>
        </div>

        <button
          onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedStatus('All'); }}
          className="self-start md:self-auto inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Search</span>
        </button>
      </div>

      {/* Search & Filter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {/* Input */}
        <div className="lg:col-span-2 relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Medicine Name (e.g. Paracetamol, Insulin, Augmentin)..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none text-sm transition"
          />
        </div>

        {/* Category Filter */}
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm transition"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>Category: {cat}</option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm transition"
          >
            <option value="All">Status: All</option>
            <option value="Available">Available</option>
            <option value="Limited Stock">Limited Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs text-slate-500 dark:text-slate-400 mb-4 flex items-center justify-between">
        <span>Showing <strong className="text-slate-900 dark:text-white">{filteredMedicines.length}</strong> items in inventory</span>
        <span className="hidden sm:inline">Updated Daily • Store WhatsApp: +91 79034 30774</span>
      </div>

      {/* Table / Grid */}
      {filteredMedicines.length > 0 ? (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800/80 text-xs uppercase font-bold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3.5 px-4">Medicine Name & Form</th>
                <th className="py-3.5 px-4">Brand / Company</th>
                <th className="py-3.5 px-4">MRP</th>
                <th className="py-3.5 px-4">Expiry Date</th>
                <th className="py-3.5 px-4">Stock Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
              {filteredMedicines.map((med) => (
                <tr key={med.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-900 dark:text-white">{med.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-2">
                      <span>{med.category}</span>
                      {med.dosageForm && <span>• {med.dosageForm}</span>}
                      {med.prescriptionRequired && (
                        <span className="text-amber-600 dark:text-amber-400 font-medium">
                          [Rx Required]
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 font-medium">
                    {med.brand}
                  </td>

                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                    ₹{med.mrp}
                  </td>

                  <td className="py-3.5 px-4 text-xs text-slate-500 dark:text-slate-400">
                    {med.expiryDate}
                  </td>

                  <td className="py-3.5 px-4">
                    {getStatusBadge(med.status)}
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => onOrderClick ? onOrderClick(med.name) : window.open(`https://wa.me/917903430774?text=${encodeURIComponent(`Hello Dinesh Medical Hall, I want to inquire about availability and order: ${med.name}`)}`, '_blank')}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
          <AlertCircle className="w-10 h-10 mx-auto text-amber-500 mb-2" />
          <h4 className="font-bold text-slate-800 dark:text-slate-200">No Medicine Found</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1 mb-4">
            We might still have this item in our offline stock at Hospital Mor. Click below to inquire directly via WhatsApp.
          </p>
          <a
            href={`https://wa.me/917903430774?text=${encodeURIComponent(`Hello Dinesh Medical Hall, please check availability for: ${searchQuery}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Pharmacist on WhatsApp</span>
          </a>
        </div>
      )}
    </div>
  );
};
