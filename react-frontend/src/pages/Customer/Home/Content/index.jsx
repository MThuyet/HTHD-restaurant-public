import About from './About';
import Menu from './Menu';
import Branch from './Branch';
import Events from './Events';
import CheckBooking from './CheckBooking';
import Booking from './Booking';

const Content = () => {
    return (
        <div className="flex flex-col h-full w-full gap-24 py-10">
            <section id="about">
                <About />
            </section>

            <section id="menu">
                <Menu />
            </section>

            <section id="branch">
                <Branch />
            </section>

            <section id="events">
                <Events />
            </section>

            <section id="check-booking">
                <CheckBooking />
            </section>

            <section id="booking">
                <Booking />
            </section>
        </div>
    );
};

export default Content;
