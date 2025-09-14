// components/EvaluationResults.jsx
"use client";
import { useState, useEffect } from 'react';

const EvaluationResults = ({ onClose }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sample results with distinct values for regular models and their RAG counterparts
    const sampleResults = [
      // Regular models
      { Model: 'GPT-4o mini', Precision: 0.3103, Recall: 1.0000, 'F1 Score': 0.4737, 'METEOR Score': 0.1263, 'Cosine Similarity': 0.6211 },
      { Model: 'GPT-4o mini (RAG)', Precision: 0.8163, Recall: 1.0000, 'F1 Score': 0.6897, 'METEOR Score': 0.2081, 'Cosine Similarity': 0.7004 },
      
      { Model: 'GPT-4o', Precision: 0, Recall: 0, 'F1 Score': 0, 'METEOR Score': 0, 'Cosine Similarity': 0 },
      { Model: 'GPT-4o (RAG)', Precision: 0, Recall: 0, 'F1 Score': 0, 'METEOR Score': 0, 'Cosine Similarity': 0 },
      
      { Model: 'Claude 3.5 Haiku', Precision: 0.5172, Recall: 1.0000, 'F1 Score': 0.6818, 'METEOR Score': 0.1160, 'Cosine Similarity': 0.5172 },
      { Model: 'Claude 3.5 Haiku (RAG)', Precision: 0.7241, Recall: 1.0000, 'F1 Score': 0.8400, 'METEOR Score': 0.2186, 'Cosine Similarity': 0.6902 },
      
      { Model: 'Claude 3 Opus', Precision: 0, Recall: 0, 'F1 Score': 0, 'METEOR Score': 0, 'Cosine Similarity': 0 },
      { Model: 'Claude 3 Opus (RAG)', Precision: 0, Recall: 0, 'F1 Score': 0, 'METEOR Score': 0, 'Cosine Similarity': 0 },
      
      { Model: 'Claude 3.5 Sonnet', Precision: 0, Recall: 0, 'F1 Score': 0, 'METEOR Score': 0, 'Cosine Similarity': 0 },
      { Model: 'Claude 3.5 Sonnet (RAG)', Precision: 0, Recall: 0, 'F1 Score': 0, 'METEOR Score': 0, 'Cosine Similarity': 0 },
      
      { Model: 'Qwen 2.5 72B', Precision: 0.5667, Recall: 1.0000, 'F1 Score': 0.7234, 'METEOR Score': 0, 'Cosine Similarity': 0 },
      { Model: 'Qwen 2.5 72B (RAG)', Precision: 0, Recall: 0, 'F1 Score': 0, 'METEOR Score': 0, 'Cosine Similarity': 0 },
    ];
    
    setResults(sampleResults);
    setLoading(false);
  }, []);

  const handleInputChange = (index, key, value) => {
    const updatedResults = [...results];
    updatedResults[index][key] = parseFloat(value) || 0;
    setResults(updatedResults);
  };

  // Helper function to determine background color based on score
  const getScoreBackground = (score) => {
    if (score >= 0.9) return 'bg-green-100';
    if (score >= 0.8) return 'bg-blue-50';
    return 'bg-gray-50';
  };

  // Group models by base name
  const getModelBaseName = (modelName) => {
    return modelName.replace(' (RAG)', '');
  };

  const groupedModels = results.reduce((groups, item) => {
    const baseName = getModelBaseName(item.Model);
    if (!groups[baseName]) {
      groups[baseName] = [];
    }
    groups[baseName].push(item);
    return groups;
  }, {});

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-5xl max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Model Evaluation Results</h2>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 text-red-700 p-4 rounded">
            Error loading results: {error}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 shadow-sm rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Model</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Precision</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Recall</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">F1 Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">METEOR Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Cosine Similarity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.keys(groupedModels).map((modelBase) => (
                  groupedModels[modelBase].map((item, idx) => (
                    <tr 
                      key={item.Model} 
                      className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${
                        item.Model.includes('(RAG)') ? 'bg-blue-50' : ''
                      } hover:bg-gray-100 transition-colors`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r">
                        {item.Model}
                      </td>
                      {['Precision', 'Recall', 'F1 Score', 'METEOR Score', 'Cosine Similarity'].map(metric => (
                        <td key={metric} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">
                          <input
                            type="number"
                            value={item[metric]}
                            onChange={(e) => handleInputChange(results.findIndex(r => r.Model === item.Model), metric, e.target.value)}
                            step="0.001"
                            min="0"
                            max="1"
                            className={`border rounded p-2 w-24 text-center ${getScoreBackground(item[metric])}`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="mt-6 flex justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-50 border border-gray-200"></div>
            <span className="text-sm text-gray-500">RAG-enhanced models</span>
          </div>
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EvaluationResults;