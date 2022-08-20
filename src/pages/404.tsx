import * as React from "react"
import Layout from "../components/layout"
import { Container, Box, Text, Link, Flex } from "../components/ui"
//import ChevronRight from "../components/chevron-right"
import * as styles from "../components/404.css"

export default function NotFound() {
  return (
    <Layout title="404: Page not found">
      <Box paddingY={4}>
        <Container>
          <Flex variant="column">
            <Text variant="mega" className={styles.heading}>
              404
            </Text>
            <Text as="h1" variant="heading">Page not found</Text>
            <Flex variant="column" gap={0}>
              <Text variant="lead" className={styles.text}>
                Сожалеем, мы не смогли найти страницу, которую вы ищите.
              </Text>
              <Link to="/" className={styles.link}>
                <span>На главную</span>
                {/* <ChevronRight className={styles.linkChevron} /> */}
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
}



// import * as React from "react"
// import { Link } from "gatsby"

// // styles
// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }

// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }

// // markup
// const NotFoundPage = () => {
//   return (
//     <main style={pageStyles}>
//       <title>Not found</title>
//       <h1 style={headingStyles}>Page not found</h1>
//       <p style={paragraphStyles}>
//         Sorry{" "}
//         <span role="img" aria-label="Pensive emoji">
//           😔
//         </span>{" "}
//         we couldn’t find what you were looking for.
//         <br />
//         {process.env.NODE_ENV === "development" ? (
//           <>
//             <br />
//             Try creating a page in <code style={codeStyles}>src/pages/</code>.
//             <br />
//           </>
//         ) : null}
//         <br />
//         <Link to="/">Go home</Link>.
//       </p>
//     </main>
//   )
// }

// export default NotFoundPage


