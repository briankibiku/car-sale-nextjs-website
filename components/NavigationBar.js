import Link from 'next/link'
export default function NavigationBar() {
    return (
        <>
            <div>NavigationBar</div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/popular_cars">
                        <a>Popular Cars</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}