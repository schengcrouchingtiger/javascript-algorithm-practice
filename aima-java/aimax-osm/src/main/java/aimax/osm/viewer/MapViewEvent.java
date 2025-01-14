package aimax.osm.viewer;

/**
 * Allows map views to inform interested listeners about user interactions such
 * as zooming or marker setting.
 * 
 * @author Ruediger Lunde
 * 
 */
public class MapViewEvent {
	MapViewPane source;
	Type type;

	public MapViewEvent(MapViewPane source, Type type) {
		this.source = source;
		this.type = type;
	}

	public MapViewPane getSource() {
		return source;
	}

	public Type getType() {
		return type;
	}

	public enum Type {
		ADJUST, ZOOM, NEW_MAP, NEW_RENDERER, MARKER_ADDED
	}
}
