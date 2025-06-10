import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ApplicationLayout } from '../components/layout/ApplicationLayout/ApplicationLayout';
import {
  Card,
  CardBody,
  CardTitle,
  Gallery,
  GalleryItem,
  Alert,
  PageSection
} from '@patternfly/react-core';

// Demo pages
const HomePage = () => (
  <>
    <Link to="/playground">Go to Playground (test)</Link>
    <PageSection>
      <Alert variant="info" isInline title="Welcome to OpenShift AI Studio">
        This is a demo of the standard top bar and navigation layout for all RHAIS pages.
      </Alert>
    </PageSection>
    <PageSection>
      <Gallery hasGutter>
        <GalleryItem>
          <Card>
            <CardTitle>Model Playground</CardTitle>
            <CardBody>
              Compare and test different AI models side-by-side with an intuitive chat interface.
            </CardBody>
          </Card>
        </GalleryItem>

        <GalleryItem>
          <Card>
            <CardTitle>My Agents</CardTitle>
            <CardBody>
              Build, manage, and deploy your custom AI agents with guided workflows.
            </CardBody>
          </Card>
        </GalleryItem>

        <GalleryItem>
          <Card>
            <CardTitle>Model Catalog</CardTitle>
            <CardBody>
              Discover and explore available AI models, prompts, and tools in our unified registry.
            </CardBody>
          </Card>
        </GalleryItem>

        <GalleryItem>
          <Card>
            <CardTitle>RAG Knowledge Bases</CardTitle>
            <CardBody>
              Create and manage knowledge bases for your retrieval-augmented generation workflows.
            </CardBody>
          </Card>
        </GalleryItem>
      </Gallery>
    </PageSection>
  </>
);

const PlaygroundPage = () => (
  <>
    <PageSection>
      <Alert variant="success" isInline title="Model Playground">
        This is the Model Playground page where users can test and compare AI models.
      </Alert>
    </PageSection>
    <PageSection>
      <Card>
        <CardTitle>Playground Interface</CardTitle>
        <CardBody>
          The playground interface would be implemented here with side-by-side model comparison capabilities.
        </CardBody>
      </Card>
    </PageSection>
  </>
);

const AgentsPage = () => (
  <>
    <PageSection>
      <Alert variant="warning" isInline title="My Agents" >
        This is the My Agents page where users can build and manage their AI agents.
      </Alert>
    </PageSection>
    <PageSection>
      <Card>
        <CardTitle>Agent Management</CardTitle>
        <CardBody>
          Agent builder interface and management tools would be implemented here.
        </CardBody>
      </Card>
    </PageSection>
  </>
);

const PlaceholderPage: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <>
    <PageSection>
      <Alert variant="info" isInline title={title}>
        {description}
      </Alert>
    </PageSection>
    <PageSection>
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardBody>
          This page is a placeholder and would contain the actual {title.toLowerCase()} functionality.
        </CardBody>
      </Card>
    </PageSection>
  </>
);

function App() {
  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement logout logic here
    alert('Logout functionality would be implemented here');
  };

  return (
    <Router>
      <ApplicationLayout
        username="jnemargut"
        onLogout={handleLogout}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/build/model-playground" element={<PlaygroundPage />} />
          <Route path="/build/agent-builder" element={<AgentsPage />} />
          <Route path="/build/my-agents" element={<AgentsPage />} />
          <Route
            path="/get-started/tutorials"
            element={<PlaceholderPage title="Tutorials" description="Learn how to use OpenShift AI Studio with step-by-step tutorials." />}
          />
          <Route
            path="/get-started/kickstarts"
            element={<PlaceholderPage title="Kickstarts" description="Quick start templates to accelerate your AI projects." />}
          />
          <Route
            path="/catalog/agents"
            element={<PlaceholderPage title="Agent Catalog" description="Browse and discover pre-built AI agents." />}
          />
          <Route
            path="/catalog/models"
            element={<PlaceholderPage title="Model Catalog" description="Explore available AI models and their capabilities." />}
          />
          <Route
            path="/catalog/mcp-servers"
            element={<PlaceholderPage title="MCP Servers" description="Manage Model Context Protocol servers and integrations." />}
          />
          <Route
            path="/catalog/guardrails"
            element={<PlaceholderPage title="Guardrails" description="Configure safety and policy guardrails for your AI applications." />}
          />
          <Route
            path="/rag/knowledge-bases"
            element={<PlaceholderPage title="Knowledge Bases" description="Create and manage knowledge bases for RAG workflows." />}
          />
          <Route
            path="/observability/tracing"
            element={<PlaceholderPage title="Tracing" description="Monitor and trace your AI application performance." />}
          />
        </Routes>
      </ApplicationLayout>
    </Router>
  );
}

export default App;