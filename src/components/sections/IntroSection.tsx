
interface Props {
  title?: string,
  content?: string
}

const IntroSection = ({ title, content }: Props) => {
  return (
    <div className={"hero min-h-screen bg-base-200"}>
      <div className={"text-center hero-content"}>
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            {`${title ? title : 'Hello there'}`}
          </h1>
          <p className="mb-5">
            Jelajahi lokasi pengamatan burung terbaik untuk melihat dan memotret burung endemik dan cantik, kami menyediakan layanan Tour terorganisir dan disesuaikan untuk memenuhi kebutuhan Anda di seluruh negeri.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default IntroSection;
