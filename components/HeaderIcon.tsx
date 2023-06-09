

const HeaderIcon = ({Icon, Title}) => {
  return (
    <div className="mx-4 flex flex-col hover:text-white active:text-red-400 lg:mx-6">
        <Icon className="h-8 "/>
        <p className="my-2">{Title}</p>
        </div>
  )
}

export default HeaderIcon