import React from 'react'
import Placeholder from '../assets/imgs/placeholder.png'


export default function Content() {
    return (
        <div>
            <div className='l-content g--fadeInLeft'>
                <div className='c-content__text'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam justo eu luctus varius. Aenean ornare, libero lacinia pretium tincidunt, massa nisl egestas elit, et euismod purus tortor nec augue. Sed lacinia arcu magna, eget pulvinar enim consequat in
                        Nam at finibus felis. Suspendisse egestas, erat ut ultrices vestibulum, velit magna suscipit lacus, id posuere ex enim vitae orci. Nam ac venenatis nisl. Donec eleifend risus in faucibus maximus. Etiam sapien libero, imperdiet ut orci varius, pretium lobortis ipsum.
                        Aliquam erat volutpat. Donec ac massa fermentum, elementum tellus vitae, feugiat nunc. Donec vestibulum semper sollicitudin. Cras vitae fermentum erat.
                    </p>
                </div>
                <div>
                    <div className='c-content__img'>
                        <img src={Placeholder} />
                    </div>
                </div>
            </div>
            <div className='l-content g--fadeInRight'>
                <div>
                    <div className='c-content__img'>
                        <img src={Placeholder} />
                    </div>
                </div>

                <div className='c-content__text'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam justo eu luctus varius. Aenean ornare, libero lacinia pretium tincidunt, massa nisl egestas elit, et euismod purus tortor nec augue. Sed lacinia arcu magna, eget pulvinar enim consequat in
                        Nam at finibus felis. Suspendisse egestas, erat ut ultrices vestibulum, velit magna suscipit lacus, id posuere ex enim vitae orci. Nam ac venenatis nisl. Donec eleifend risus in faucibus maximus. Etiam sapien libero, imperdiet ut orci varius, pretium lobortis ipsum.
                        Aliquam erat volutpat. Donec ac massa fermentum, elementum tellus vitae, feugiat nunc. Donec vestibulum semper sollicitudin. Cras vitae fermentum erat.
                    </p> 
                </div>

            </div>
        </div>

    )
}
