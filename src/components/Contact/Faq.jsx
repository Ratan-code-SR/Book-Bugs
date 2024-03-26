import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Your question about us</h2>
                    <p className="mt-4 mb-8 dark:text-gray-600">"At the Book Bugs Library, readers of all ages are enchanted by the whimsical atmosphere and the delightful antics of the magical book bugs."</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is Book Bugs Library?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Book Bugs Library is a whimsical haven for book lovers, adorned with colorful décor and populated by friendly "book bugs" who assist visitors in their literary adventures.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Where is Book Bugs Library located?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Book Bugs Library is nestled in a charming corner of  Rangamati TTC hidden away from the hustle and bustle of everyday life, creating a serene environment for readers to explore. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Who can visit Book Bugs Library?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Book Bugs Library warmly welcomes readers of all ages, from children just discovering the magic of books to seasoned bibliophiles seeking new literary treasures. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What kinds of books can I find at Book Bugs Library?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Book Bugs Library boasts a diverse collection of books spanning various genres, including children's literature, fantasy, mystery, science fiction, romance, and non-fiction. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Do you have special events or activities at Book Bugs Library?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, Book Bugs Library hosts a range of events and activities, such as author readings, storytelling sessions, book clubs, creative writing workshops, and themed literary parties to engage and entertain visitors. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;