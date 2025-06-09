## Project Overview: RHOAI UI v3 (RHAIS) – Gen AI Studio

### 1\. Executive Summary

Red Hat OpenShift AI Studio v3 (RHAIS) is a unified, enterprise-grade interface that empowers both AI Engineers (AIEs) and Platform Engineers (PEs) to seamlessly discover models, build and evaluate agents, and deploy secure production workloads—without the friction of manual infrastructure setup or disjointed toolchains. Anchored by a policy-aware AI Registry, RHAIS delivers an end-to-end journey from prototype to scale, targeting a November 10, 2025 MVP release at KubeCon NA.

---

### 2\. Engagement Purpose

* **Objective:** Deliver a cohesive “studio” experience for generative AI and agentic systems within OpenShift AI  
    
* **Scope:**  
  * **Model Discoverability & Governance** via a centralized AI Registry  
  * **Agent Creation & Prompt Management** through guided “golden-path” wizards  
  * **Automated Evaluation & Feedback** pipelines integrated with CI/CD  
  * **Policy-Aware Security & Safety (Guardrails)** baked into every deployment  
  * **Platform Observability & Cost Controls** for transparent operations

---

### 3\. Key Personas & Journeys

#### AI Engineer (AIE)

* **Profile:** IDE-native (VS Code \+ GitHub CI), framework-first, continuous learner  
* **Journey Stages:**  
    
  1. **Discover** – Search, compare, and select models or prompts  
  2. **Prototype** – Ingest data, define RAG pipelines, build agent blueprint  
  3. **Evaluate** – Run auto-evals, inspect metrics, iterate  
  4. **Deploy** – Choose templates, attach guardrails, push to cluster  
  5. **Operate** – Monitor performance, version prompts, retrain  
* **Core Needs:** Low-toil workflows, rapid feedback, data connectors, built-in policy scaffolds

#### Platform Engineer (PE)

* **Profile:** GitOps-first, metrics-driven, security-skeptical, cost-conscious  
* **Journey Stages:**  
  1. **Request** – Authorize assets via RBAC and policy review  
  2. **Provision** – Allocate GPU/quota, set up sandbox environments  
  3. **Operate** – Oversee inference endpoints, real-time cost dashboards  
  4. **Optimize** – Tune quotas, enforce SLAs, archive stale assets  
* **Core Needs:** Authentication/authorization pipelines, approval workflows, quota alerts, audit trails

---

### 4\. MVP Goals & Deliverables

| Focus Area | Deliverable | Persona |
| :---- | :---- | :---- |
| **Registry & Catalog** | Unified AI Registry (models, prompts, tools, MCPs) | AIE \+ PE |
| **Playground** | Side-by-side model chat UI \+ compare pane | AIE |
| **Data Manager** | Wizard for ingesting, chunking, previewing datasets | AIE |
| **Auto-Eval** | YAML-driven eval pipelines, LLM-judge, dashboards | AIE |
| **Guardrails & Security** | Policy-aware scaffolds, SBOM/risk scores, one-click scans | AIE \+ PE |
| **Deployment & Ops** | Deployment templates, GPU-Sandbox, cost dashboards | PE |
| **Prompt Management** | Versioned templates, Git integration | AIE |
| **RBAC & Audit** | Fine-grained approvals, audit log viewer | PE |

## 🔝 Top Navigation Bar Description

The **top bar** serves as the global header across the Red Hat OpenShift AI platform, providing contextual navigation, view switching, and user-related controls.

### ◾ Left Section

* **Red Hat Logo (Icon)** The Red Hat logo appears as a visual brand marker and typically functions as a clickable element to return to a main dashboard or homepage.  
    
* **Product Name and View Switcher** **`Red Hat OpenShift AI | Generative`** This label indicates the current product area and view:  
    
  * **Red Hat OpenShift AI**: The broader platform context.  
      
  * **Generative**: The current operational mode, focused on generative AI workflows.  
      
  * The **dropdown arrow** indicates this is a **selectable view switcher**, allowing users to toggle between:  
      
    * **Generative**  
    * **Predictive**  
    * **Administration** (if permissions allow)

---

### ◾ Right Section

* **🔔 Notification Icon (Bell)** Tapping the bell opens the notification center, where users can view alerts, status messages, or system updates related to their AI assets or platform activities.  
    
* **🧇 Waffle Menu (Grid Icon)** The waffle menu provides quick access to other OpenShift AI areas or tools, such as data science projects, pipelines, or deployments. This is the **standard OpenShift AI global navigation launcher**.  
    
* **👤 Username Dropdown (`jnemargut`)** The username appears as a dropdown, offering profile and account-related actions:  
    
  * View profile  
  * Sign out  
  * Manage settings/preferences This is consistent with the **standard OpenShift AI profile menu** used across the platform.

## 🧭 Left-Hand Navigation Outline

1. **Home**  
2. **Model Playground**  
3. **My Agents**  
4. **Get Started**  
   * Tutorials  
   * Kickstarts  
5. **Catalog**  
   * Agents  
   * Models  
   * MCP Servers  
   * Guardrails  
6. **RAG**  
   * Knowledge Bases  
7. **Observability**  
   * Tracing
