import AboutUsSection from '../components/sections/AboutUsSection';
import IntroSection from '../components/sections/IntroSection';
import TourSection from '../components/sections/TourSection';
import DefaultLayout from '../layout/DefaultLayout';

const HomePage = () => {
  return (
    <>
      <DefaultLayout>
        <IntroSection />
        <AboutUsSection />
        <TourSection />

        <div className="hero min-h-screen bg-white">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <div className={'grid grid-cols-3 gap-2'}>
              <div className="card shadow-lg bg-white">
                <figure>
                  <img src="https://picsum.photos/id/1005/60/40" className="w-full" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Small image file</h2>
                  <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                  <div className="card-actions">
                    <div className="badge badge-ghost">Article</div>
                    <div className="badge badge-ghost">Photography</div>
                  </div>
                </div>
              </div>
              <div className="card shadow-lg bg-white">
                <figure>
                  <img src="https://picsum.photos/id/1005/60/40" className="w-full" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Small image file</h2>
                  <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                  <div className="card-actions">
                    <div className="badge badge-ghost">Article</div>
                    <div className="badge badge-ghost">Photography</div>
                  </div>
                </div>
              </div>
              <div className="card shadow-lg bg-white">
                <figure>
                  <img src="https://picsum.photos/id/1005/60/40" className="w-full" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Small image file</h2>
                  <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                  <div className="card-actions">
                    <div className="badge badge-ghost">Article</div>
                    <div className="badge badge-ghost">Photography</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="mb-5 text-5xl font-bold">
                Burung Nusantara
              </h1>
              <p className="mb-5">
                Di seluruh nusantara terdapat puluhan ribu lokasi habitat burung-burung yang tersebar. Ingin melihat dan merasakan bagaimana habitat burung favorit kalian? kami menawarkan tour di seluruh wilayah Indonesia!
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default HomePage;