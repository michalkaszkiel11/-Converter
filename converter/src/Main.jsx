export const Main = ({ children, elementRef }) => {
    return (
        <main className="box fade-in" ref={elementRef}>
            {children}
        </main>
    );
};
