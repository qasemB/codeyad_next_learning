import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Car Store',
  description: 'This is my Car store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800/,00i,900,900i" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Rufina:400,700" rel="stylesheet" />
        <link rel="shortcut icon" type="image/icon" href="/assets/logo/favicon.png" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/linearicons.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/bootsnav.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body className={inter.className}>

        <div className="top-area">
          <div className="header-area">
            <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

              <div className="container">

                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand" href="index.html">carvilla<span></span></a>

                </div>
                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                  <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                    <li className=" scroll active"><a href="#home">home</a></li>
                    <li className="scroll"><a href="#service">service</a></li>
                    <li className="scroll"><a href="#featured-cars">featured cars</a></li>
                    <li className="scroll"><a href="#new-cars">new cars</a></li>
                    <li className="scroll"><a href="#brand">brands</a></li>
                    <li className="scroll"><a href="#contact">contact</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="clearfix"></div>

          </div>
        </div>
        
        {children}
      </body>
    </html>
  )
}
