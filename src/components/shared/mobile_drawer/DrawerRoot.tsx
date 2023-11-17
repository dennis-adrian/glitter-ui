import DrawerSidebar from './DrawerSidebar';

type Props = {
  children: React.ReactNode;
};

const DrawerRoot = ({ children }: Props) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">{children}</div>
      <DrawerSidebar />
    </div>
  );
};

export default DrawerRoot;
