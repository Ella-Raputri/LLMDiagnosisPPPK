# Retrieval-Augmented LLMs with Indonesian Clinical Trials Guidelines: A Comparative Study

<br>

**Contributors:**
- Ella Raputri
- Ari Jaya Teguh
- Saffanah Nur Hidayah
- Feri Setiawan
- Nunung Nurul Qomariyah

<br>

## Project Description
This repository contains the code for evaluating the diagnostic ability of LLM that is integrated with context from PPPK (Panduan Praktik Profesional Kedokteran) using RAG (Retrieval-Augmented Generation). With this research, we aim to analyze and compare each LLM diagnostic ability and further utilize them to help doctors in Indonesia diagnose diseases. 

<br>

## Project Prototype
Besides this repository that is used to store the evaluation code, we also have another repository which is in [here](https://github.com/Ella-Raputri/radiology-gpt). The prototype is an enhanced version of the previous researcher's prototype and is redeployed in [here](https://radiology-gpt-psi.vercel.app/). You can access the RAG-enabled AI chatbot through the deployed prototype. However, take notes that the diagnosis from the LLM is not always accurate; we do not take any responsibility for misdiagnosis. For a more accurate diagnosis, please consult medical professionals. 

<br>

## Folders and File
<details>
<summary>&ensp;<b>cleaning_before_eval</b></summary>
  
- Contains the code to clean the diagnosis data that we gathered from each LLM and the ground truth from the doctor.  

</details>

<details>
<summary>&ensp;<b>new_eval</b></summary>
  
- Contains the code and methods that we use to evaluate the diagnostic ability of each LLM. 
</details>

<details>
<summary>&ensp;<b>old_evaluation</b></summary>
  
- Contains the old experimental code and methods that we use to evaluate the diagnostic ability of each LLM, but we decide not to use it later. 
</details>

<details>
<summary>&ensp;<b>rag</b></summary>
  
- Contains the RAG code experiment for some models.  
</details>

<details>
<summary>&ensp;<b>reference</b></summary>
  
- Contains the old analysis and some reference used for this research.
</details>

<details>
<summary>&ensp;<b>requirements.txt</b></summary>
  
- Contains all the libraries that are needed to run the evaluation code.
</details>
