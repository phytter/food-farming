import { Header, Content } from '@/presentation/components'

type Props = {
    children: React.ReactElement
}

const Panel: React.FC<Props> = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <Content>
                {children}
            </Content>
        </div>
    )
}

export default Panel
