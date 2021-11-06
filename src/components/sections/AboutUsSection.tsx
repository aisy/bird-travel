const AboutUsSection = () => {
  return (
    <div className="hero min-h-screen bg-green-100">
      <div className="flex-col hero-content lg:flex-row-reverse">
        {/* <img src={"https://picsum.photos/id/1005/600/600"} alt={"custom image"} /> */}
        <img className={"max-w-2xl"} src={require('../../assets/img/undraw_dreamer_gxxi.svg').default} />
        <div>
          <h1 className="mb-5 text-5xl font-bold">
            About Us
          </h1>
          <p className="mb-5 w-1/2">
            Jelajahi lokasi pengamatan burung terbaik untuk melihat dan memotret burung endemik dan cantik. Tur birding terorganisir dan disesuaikan untuk memenuhi kebutuhan Anda di seluruh negeri.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection
