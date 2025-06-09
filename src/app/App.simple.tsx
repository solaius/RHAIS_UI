function App() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>RHAIS UI - Test</h1>
            <p>This is a test to see if the basic React app is working.</p>
            <div style={{
                border: '1px solid #ccc',
                padding: '20px',
                marginTop: '20px',
                backgroundColor: '#f5f5f5'
            }}>
                <h2>Top Bar Preview</h2>
                <p>The PatternFly top bar components will be rendered here once dependencies are working.</p>

                <h3>Features to include:</h3>
                <ul>
                    <li>✅ Hamburger menu for sidebar toggle</li>
                    <li>✅ Red Hat OpenShift AI logo with theme support</li>
                    <li>✅ View switcher dropdown (Generative, Predictive, Administration)</li>
                    <li>✅ Notification bell</li>
                    <li>✅ Waffle menu (application launcher)</li>
                    <li>✅ Help menu</li>
                    <li>✅ Theme toggle</li>
                    <li>✅ User dropdown with logout</li>
                </ul>
            </div>
        </div>
    );
}

export default App;