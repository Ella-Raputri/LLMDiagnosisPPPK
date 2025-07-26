# LLM Diagnosis Evaluation

This project evaluates LLM diagnosis answers against ground truth using two metrics:
1. **Semantic Answer Similarity** - Uses sentence transformers to calculate similarity between answers
2. **LLM Based Judge** - Uses GPT to evaluate answer quality and relevance

## Setup

1. Install required dependencies:
```bash
pip install -r requirements.txt
```

2. Set up your OpenAI API key:
   - Get an API key from [OpenAI](https://platform.openai.com/api-keys)
   - In the notebook, uncomment and set: `openai.api_key = "your-api-key-here"`

## Data Structure

The notebook expects an Excel file named `"30 sample penyakit - hasil prompt LLM.xlsx"` with 5 sheets:
- **Claude 3.5 Haiku** (used as ground truth)
- **Qwen 2.5 72B**
- **GPT-4o mini**
- **Deepseek-V3 (non RAG)**
- **Deepseek-V3-RAG**

Each sheet should have columns including "Question" and "Answer".

## Features

### 1. Semantic Answer Similarity
- Uses the `all-MiniLM-L6-v2` model for sentence embeddings
- Calculates cosine similarity between candidate answers and ground truth
- Automatically selects the best matching answer from multiple candidates

### 2. LLM Based Judge
- Uses GPT-4 to evaluate answer quality
- Provides scores (0-1), reasoning, and categorization (correct/partial/incorrect)
- Considers medical context and relevance

### 3. Comprehensive Analysis
- Compares all 4 LLMs against ground truth
- Generates visualizations and statistics
- Exports detailed results to CSV
- Identifies best and worst performing questions

## Output

The notebook generates:
1. **Visualizations**: Bar charts, box plots, and scatter plots comparing LLM performance
2. **Summary Statistics**: Mean scores and standard deviations for each LLM
3. **Detailed Results**: CSV file with question-by-question analysis
4. **Performance Rankings**: Overall ranking of LLMs by both metrics

## Usage

1. Open `llm_diagnosis_evaluation.ipynb` in Jupyter
2. Ensure the Excel file is in the same directory
3. Set your OpenAI API key
4. Run all cells sequentially
5. Review results and visualizations
6. Check the generated CSV file for detailed analysis

## Key Functions

- `clean_and_split_answers()`: Processes multiple answers from single text
- `calculate_semantic_similarity()`: Computes similarity between two texts
- `find_best_answer()`: Selects best answer using semantic similarity
- `llm_judge_answer()`: Uses GPT to evaluate answer quality
- `evaluate_llm_answers()`: Main evaluation function for each LLM

## Notes

- The semantic similarity model will be downloaded automatically on first use
- LLM judge requires OpenAI API credits
- Processing time depends on the number of questions and API response times
- Results are saved to `llm_diagnosis_evaluation_results.csv` 