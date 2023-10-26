interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="mx-auto xl:px-12 md:px-8 px-4">
            {children}
        </div>
    )
}

export default Container