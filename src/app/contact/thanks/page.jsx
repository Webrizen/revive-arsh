import Link from 'next/link';

export default function Thanks() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thank you!</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We've received your inquiry and will get back to you as soon as possible.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/contact"
                            className="rounded-md bg-zinc-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
                        >
                            Back to Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}