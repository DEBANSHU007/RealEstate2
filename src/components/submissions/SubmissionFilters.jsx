import React from 'react';

function SubmissionFilters({
  selectedStatus,
  onStatusChange,
  selectedCategory,
  categories,
  onCategoryChange,
}) {
  return (
    <div className="flex gap-4 mb-6">
      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
      >
        <option value="all">All Status</option>
        <option value="pending">Pending</option>
        <option value="reviewed">Reviewed</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default SubmissionFilters;