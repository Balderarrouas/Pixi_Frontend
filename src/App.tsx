import './App.css'
import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from './components/NavBar';
import Post from './components/Post';

function App() {
  return (
    <Grid
      templateRows='auto 1fr' // First row for navbar, second row for main content
      templateColumns='auto 1fr auto' // First column for left aside, second column for main content, third column for right aside
      gap={10}
      height="100vh" // Ensure the grid covers the entire height of the viewport
    >
      {/* Navbar */}
      <GridItem rowSpan={1} colSpan={3} >
        <NavBar/>
      </GridItem>

      {/* Left Aside */}
      <GridItem colSpan={1} bg='papayawhip'>
        Left Aside
      </GridItem>

      {/* Main Content */}
      <GridItem colSpan={1} bg='green' overflowY="auto">
        <Post title="OMG My cat is so cute <<<3333" content='src/assets/Cutecat.jpg' author='Eilie Maagaard the cat princess'></Post>
        <Post title="Post2" content='src/assets/Cutecat.jpg' author='EM'></Post>
      </GridItem>

      {/* Right Aside */}
      <GridItem colSpan={1} bg='papayawhip'>
        Right Aside
      </GridItem>
    </Grid>
  )
}

export default App